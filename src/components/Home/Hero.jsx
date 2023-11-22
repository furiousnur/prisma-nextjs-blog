"use client";
import React, {useState} from 'react';
const Hero = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    
    return (
        <div className="container section-top" style={{ marginTop: '42px' }}>
            <div className="row">
                <div className="col-md-12 col-lg-12 col-sm-12 col-12">
                    <div className="d-flex justify-content-center">
                        <div className="col-md-1.5">
                            <button className="btn btn-success" type="button"><span className="bi bi-geo-alt"></span> All Of Bangladesh</button> 
                        </div>
                    </div>
                    <div className="d-flex justify-content-center" style={{ marginTop: '12px' }}>
                        <div className="col-md-8">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search..." />
                                <button className="btn btn-success d-flex align-items-center" type="button">
                                    <i className="bi bi-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;