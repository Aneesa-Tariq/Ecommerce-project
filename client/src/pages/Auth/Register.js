import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState("Ali");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();
    
    //form function
    const handleSubmit=async(e)=>{
        e.preventDefault();
       try {
        const res=await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,{name,email,password,phone,address});
        if(res.data.success){
            toast.success(res.data.message);
            setTimeout(() => {
                 navigate("/login");
            }, 2000);
            
       
        }else{
              toast.error(res.data.message);
        }
       } catch (error) {
         console.log(error);
         toast.error("Something Went Wrong");
       }
    };
    return (
        <Layout title={"Register - Ecommerce App"}>
            <div className="form-container" style={{ margin: '45px' }}>
                <h1 className='registerh1'> Register Page</h1>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'> <input type='text' value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputName" placeholder='Enter Your Name' required/></div>
                    <div className='mb-3'><input type='email' value={email}  onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail" placeholder='Enter Your Email' required/></div>
                    <div className='mb-3'><input type='password' value={password}  onChange={(e) => setPassword(e.target.value)}className="form-control" id="exampleInputPassword" placeholder='Enter Your Password'required /></div>
                    <div className='mb-3'><input type='phone' value={phone}  onChange={(e) => setPhone(e.target.value)}className="form-control" id="exampleInputPhone" placeholder='Enter Your Phone' required/></div>
                    <div className='mb-3'><input type='address' value={address}  onChange={(e) => setAddress(e.target.value)}className="form-control" id="exampleInputAddress" placeholder='Enter Your Address' required/></div>
                    <button className=" btn btn-primary" type='submit'>Register</button>
                </form>
            </div>
        </Layout>
    )
}

export default Register
