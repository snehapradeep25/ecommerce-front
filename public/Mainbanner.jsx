import React from "react";
import './Mainbanner.css';
import pb2 from './images/banners/pb2.jpg'

const Mainbanner = ({ imageUrl }) => {
    return (
        <div className="banner">
            <img src={pb2} alt="Banner" />
        </div>
    );
};

export default Mainbanner;
