"use client"
import {useState} from "react";
import {ErrorToast, IsEmail, IsEmpty, SuccessToast} from "@/utility/FormHelper";
import SubmitButton from "@/components/SubmitButton/SubmitButton";
import {useRouter} from "next/navigation";
import Link from "next/link";

const SignUpForm = () => {
    const [data, setData] = useState({firstName:"",lastName:"",email:"",mobile:"",password:"",confirm_password:""});
    const [submit, setSubmit] = useState(false);
    const router=useRouter();
    const inputOnChange = (name,value) => {
        setData((data)=>({
            ...data,
            [name]:value
        }))
    }
    const formSubmit = async () => {
      if(IsEmpty(data.firstName)){
          ErrorToast("First Name Required")
      }else if(IsEmpty(data.lastName)){
          ErrorToast("Last Name Required")
      }else if(IsEmpty(data.mobile)){
          ErrorToast("Mobile No Required")
      }else if(IsEmail(data.email)){
          ErrorToast("Valid Email Address Required")
      }else if(IsEmpty(data.password)){
          ErrorToast("Password Required")
      }else if(IsEmpty(data.confirm_password)){
          ErrorToast("Confirm Password Required")
      }else if(data.password!==data.confirm_password){
          ErrorToast("Password Does Not Match")
      }else{
          const requestData = { ...data };
          delete requestData.confirm_password;
          setSubmit(true);
          const options = {
              method: 'POST',
              headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
              body: JSON.stringify(requestData)
          }
          let res=await fetch("/api/user/registration",options);
          let ResJson=await res.json();

          if(ResJson['status']==="success"){
              SuccessToast("Registration Success")
              router.replace("/User/Login")
          }
          else{
              setSubmit(false);
              ErrorToast("Request Fail")
          }
      }
    }

    return (
        <div className="row h-100  justify-content-center center-screen">
            <div className="col-md-8 col-lg-8 col-sm-12 col-12 ">
                <div className="card container-fluid animated fadeIn p-5 gradient-bg">
                    <div className="row ">
                        <h5 className="mb-3 mx-0 px-0 text-center">User Registration</h5>
                        <hr/>
                        <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                            <label className="form-label"><strong>First Name</strong></label>
                            <input onChange={(e)=>{inputOnChange("firstName",e.target.value)}} type="text" className="form-control mb-2" placeholder="First Name"/>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                            <label className="form-label"><strong>Last Name</strong></label>
                            <input onChange={(e)=>{inputOnChange("lastName",e.target.value)}} type="text" className="form-control mb-2"  placeholder="Last Name"/>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                            <label className="form-label"><strong>Mobile</strong></label>
                            <input onChange={(e)=>{inputOnChange("mobile",e.target.value)}} type="text" className="form-control mb-2"  placeholder="Mobile"/>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                            <label className="form-label"><strong>Email</strong></label>
                            <input onChange={(e)=>{inputOnChange("email",e.target.value)}} type="email" className="form-control mb-2"  placeholder="Email"/>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                            <label className="form-label"><strong>Password</strong></label>
                            <input onChange={(e)=>{inputOnChange("password",e.target.value)}} type="password" className="form-control mb-2"  placeholder="Password"/>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                            <label className="form-label"><strong>Confirm Password</strong></label>
                            <input onChange={(e)=>{inputOnChange("confirm_password",e.target.value)}} type="password" className="form-control mb-2"  placeholder="Confirm Password"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                            <SubmitButton className="btn btn-success w-100 mt-3" submit={submit} onClick={formSubmit} text="Sign Up"/>
                        </div>
                        <div className="my-3 d-flex">
                            <Link href="/User/Login" className="nav-link mx-2">Login</Link> |
                            <Link href="/User/EmailVerify" className="nav-link mx-2"> Forget Password</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SignUpForm;