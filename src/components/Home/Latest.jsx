"use client"
import Link from 'next/link';
import React from 'react';
import { Fade } from "react-awesome-reveal";
import Subscribers from "@/components/Subscribers/Subscribers";
const Latest = () => {
    return (
        <div className="container mt-5">
            <h5>Browse items by category</h5>
            <hr className=""/>
           <div className="row">
               <div className="col-md-12 col-lg-12 col-sm-12 col-12 px-3">
                   <div className="row">
                       <div className="p-2 col-md-2">
                           <a className="flex items-center text-center">
                               <div className="col-md-6 ">
                                   <i className="bi bi-phone"></i>
                               </div>
                               <div className="col-md-6">
                                   <h6 className="card-title text-right">Mobiles</h6>
                                   <p>90,104 ads</p>
                               </div>
                           </a>
                       </div>
                       <div className="p-2 col-md-2">
                           <a className="flex items-center text-center">
                               <div className="col-md-6 ">
                                   <i className="bi bi-phone"></i>
                               </div>
                               <div className="col-md-6">
                                   <h6 className="card-title text-right">Mobiles</h6>
                                   <p>90,104 ads</p>
                               </div>
                           </a>
                       </div>
                   </div>
               </div> 
           </div> 
        </div>
    );
};

export default Latest;