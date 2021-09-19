import React from 'react';
import './hp_style.css';
import profile from'../../img/profile.jfif'

function HeaderProfile () {
    return(
        <div className='profilecontainer'>
            <img src={profile} className='profileimage'>
            </img>
        </div>
    );
}
export default HeaderProfile;