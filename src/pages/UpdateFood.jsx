import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import MasterLayout from "../masterLayout/MasterLayout.jsx";
import {useParams} from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

function UpdateFood(props) {

    const navigate=useNavigate();
    let {id}=useParams()
    const [data,setData]=useState(null)

    useEffect(() => {
        loadData()
    }, []);

    const loadData =async () => {
      let res= await axios.get("/api/readByIdFood/"+id)
        setData(res.data['data'])

        console.log(data['data'])
    }


    const [validated, setValidated] = useState(false);

    const handleSubmit = async (event) => {

        event.preventDefault();
        let formData=new FormData(event.target)
        let name = formData.get("name");
        let code = formData.get("code");
        let img = formData.get("img");
        let category = formData.get("category");
        let qty = formData.get("qty");
        let price = formData.get("price");

        await axios.put(`/api/updateFood/${id}`,{
            "foodName":name,
            "foodCode":code,
            "foodImg":img,
            "foodCategory":category,
            "foodQty":qty,
            "foodPrice":price
        })

        toast.success("Update Successful")
 navigate("/")


    };

    return (
        <MasterLayout>
            <div className="pb-lg-5 container  px-3">
                <h5>Update Food </h5>
                <form className=" pt-3" onSubmit={handleSubmit}>
                    <div className="row gx-5 gy-4">

                        <div className="col-md-4">
                            <label className="pb-2">Food name</label>

                            <input type="text" name="name" defaultValue={data!==null?(data["foodName"]):("")} required className="form-control  form-control-lg" size="lg" placeholder=""/>

                        </div>
                        <div className="col-md-4">
                            <label className="pb-2">Food Code</label>

                            <input type="text" name="code" required  defaultValue={data!==null?(data["foodCode"]):("")}  className="form-control  form-control-lg" size="lg" placeholder=""/>

                        </div>
                        <div className="col-md-4">
                            <label className="pb-2">Food Image</label>

                            <input type="text" name="img"  defaultValue={data!==null?(data["foodImg"]):("")} required  className="form-control  form-control-lg" size="lg" placeholder=""/>

                        </div>
                        <div className="col-md-4">
                            <label className="pb-2">Food Category</label>

                            <input type="text" name="category" defaultValue={data!==null?(data["foodCategory"]):("")} required className="form-control  form-control-lg" size="lg" placeholder=""/>

                        </div>
                        <div className="col-md-4">
                            <label className="pb-2">Qty</label>

                            <input type="number" name="qty" required defaultValue={data!==null?(data["foodQty"]):("")} className="form-control  form-control-lg" size="lg" placeholder=""/>

                        </div>
                        <div className="col-md-4">
                            <label className="pb-2">Price</label>

                            <input type="number" name="price" required defaultValue={data!==null?(data["foodPrice"]):("")} className="form-control  form-control-lg" size="lg" placeholder=""/>

                        </div>
                        <div className="col-md-4">
                            <button className="btn  btn-lg text-white formBtn" type="submit">Update</button>
                        </div>
                    </div>



                </form>
            </div>
        </MasterLayout>


    );
}

export default UpdateFood;