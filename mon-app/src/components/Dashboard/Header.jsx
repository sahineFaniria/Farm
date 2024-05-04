import React from 'react';
import setting from "../../images/settings.svg";


const Header = () => {
  return (
    <div >
        <div className='head px-10 '>
            <h2 className='farm-name'>My Farm Name</h2>
            <div className=' flex gap-1'>
                <img src={setting} alt="" />
                <h2>Username</h2>
            </div>
            
        </div>
        
    </div>
  )
}

export default Header;