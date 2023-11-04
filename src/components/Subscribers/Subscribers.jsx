"use client"
import {useState} from "react";
import {ErrorToast, IsEmail, IsEmpty, SuccessToast} from "@/utility/FormHelper";
import SubmitButton from "@/components/SubmitButton/SubmitButton"; 

const Subscribers = () => {
    const [data, setData] = useState({email:""});
    const [submit, setSubmit] = useState(false);
    
    const inputOnChange = (name,value) => {
        setData((data)=>({
            ...data,
            [name]:value
        }))
    }
    const formSubmit =async (e) => {
        e.preventDefault();
        if(IsEmail(data.email)){
            ErrorToast("Valid Email Address Required")
        }
        else if(IsEmpty(data.email)){
            ErrorToast("Email Address Required")
        }
        else{
            setSubmit(true);
            const requestData = { ...data };
            const options = {
                method: 'POST',
                headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
                body: JSON.stringify(requestData)
            }
            
            let res=await fetch("/api/subscribe",options);
            let ResJson=await res.json();
            setSubmit(false);

            if(ResJson['status']==="success"){
                SuccessToast("Subscribe Successfully")
            }
            else{
                ErrorToast("Request Fail")
            }

        }
    }
    return ( 
        <div className="card p-3 shadow-sm">
            <span className="f-52 text-center text-muted"> <i className="bi  bi-envelope"></i></span>
            <h6 className="text-center mb-3 mt-0">News Letter</h6>
            <input value={data.email} type="email" onChange={(e)=>{inputOnChange("email",e.target.value)}} placeholder="Email Address" className="form-control mb-3"/>
            <SubmitButton className="btn btn-danger" submit={submit} text="Confirm" onClick={formSubmit}/>
        </div>  
    );
}
export default Subscribers;