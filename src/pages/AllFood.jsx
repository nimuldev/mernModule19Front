import React, {useEffect, useState} from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import MasterLayout from "../masterLayout/MasterLayout.jsx";
import axios from "axios";
import Loader from "../component/Loader.jsx";
import toast from "react-hot-toast";
import {Link} from "react-router-dom";

const AllFood = () => {
const [data,setData]=useState(null)


    const deleteFood = async (id) => {
      console.log(id)
      await axios.get("/api/deleteFood/"+id)
        toast.success('Successfully Deleted!')
        loadData()
    }

    useEffect(() => {
        loadData()
    }, []);

const loadData = async () => {

    let res= await axios.get("/api/readFood")
    setData(res.data["data"])
    console.log(data)
}

    return (
        <MasterLayout>
            <div className="pb-lg-5 container  px-3">
                <h5>All Food List</h5>
                <div className="row g-3 pt-3">
                    {
                        data==null ? (<Loader/>):(
                            data.map((item,i)=>{
                                return (
                                    <div className="col-md-3" key={i}>
                                        <Card>

                                            <div className="featureImg  p-3 d-flex justify-content-end"
                                                 style={{backgroundImage:`url(${item['foodImg']})`}}>
                                                <p className="text-white  "><span
                                                    className="price py-1 px-2 rounded-1">Tk: {item['foodPrice']}</span></p>

                                            </div>

                                            <Card.Body>
                                                <Card.Text>
                                                    {item['foodName']}
                                                </Card.Text>
                                                <div>
                                                    <Link variant="primary" className="Edit btn" to={`/update/${item["_id"]}`} >Edit</Link>
                                                    <Button variant="primary"  onClick={()=>{deleteFood(item['_id'])}} className="Delete btn">Delete</Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )
                            })
                        )
                    }



                </div>
            </div>
        </MasterLayout>
    );
};

export default AllFood;