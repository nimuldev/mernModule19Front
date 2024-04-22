import React from 'react';
import MasterLayout from "../masterLayout/MasterLayout.jsx";
import axios from "axios";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const CreateFood = () => {

    const navigate=useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();


        let formData=new FormData(event.target)
        let name = formData.get("name");
        let code = formData.get("code");
        let img = formData.get("img");
        let category = formData.get("category");
        let qty = formData.get("qty");
        let price = formData.get("price");

        await axios.post(`/api/createFood`,{
            "foodName":name,
            "foodCode":code,
            "foodImg":img,
            "foodCategory":category,
            "foodQty":qty,
            "foodPrice":price
        })

        toast.success("Food Creates Successful")
        navigate("/")



    };

    return (
        <MasterLayout>
            <div className="pb-lg-5 container  px-3">
                <h5>Create Food</h5>
                <form className=" pt-3" onSubmit={handleSubmit}>
                    <div className="row gx-5 gy-4">

                        <div className="col-md-4">
                            <label className="pb-2">Food name</label>

                            <input type="text" name="name" required className="form-control  form-control-lg" size="lg"
                                   placeholder=""/>

                        </div>
                        <div className="col-md-4">
                            <label className="pb-2">Food Code</label>

                            <input type="text" name="code" required className="form-control  form-control-lg" size="lg"
                                   placeholder=""/>

                        </div>
                        <div className="col-md-4">
                            <label className="pb-2">Food Image</label>

                            <input type="text" name="img" required className="form-control  form-control-lg" size="lg"
                                   placeholder=""/>

                        </div>
                        <div className="col-md-4">
                            <label className="pb-2">Food Category</label>

                            <input type="text" name="category" required className="form-control  form-control-lg"
                                   size="lg" placeholder=""/>

                        </div>
                        <div className="col-md-4">
                            <label className="pb-2">Qty</label>

                            <input type="number" name="qty" required className="form-control  form-control-lg" size="lg"
                                   placeholder=""/>

                        </div>
                        <div className="col-md-4">
                            <label className="pb-2">Price</label>

                            <input type="number" name="price" required className="form-control  form-control-lg"
                                   size="lg" placeholder=""/>

                        </div>
                        <div className="col-md-4">
                            <button className="btn  btn-lg text-white formBtn" type="submit">Submit</button>
                        </div>
                    </div>


                </form>
            </div>
        </MasterLayout>
    );
};

export default CreateFood;