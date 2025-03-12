import React from 'react';
import './usercard.css';
const Usercard = () => {
    const profilephoto = " https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" ;
    const name = "Kode deepak" ;
    const email = "sdfghjkl@gmail.com" ;
    const phonenumber  = "8919548563" ;
    const address =  "8523/Nellore/andhra pradesh" ;

    return (
        <div>
        <img src={profilephoto} alt="profilephoto" className='usercard-img'/>
        <h2 className="usercard-name">{name}</h2>
        <p className="usercard-email">Email :{email}</p>
        <p className="usercard-number">Phone number :{phonenumber}</p>
        <p className="usercard-address">Address :{address}</p>
        </div>
    );
};

export default Usercard;