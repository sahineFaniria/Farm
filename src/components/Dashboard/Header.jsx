import React from 'react';
import Notif from './Modal/Notif';
import Right from './Modal/Right';


const Header = () => {
  return (
    <div >
        <div className='head px-10 '>
            <h2 className='farm-name text-[12px] md:text-[20px] '>My Farm Name</h2>
            <div className=' flex gap-1'>
                <h2 className='flex items-center' >Username</h2>
                <div className='flex items-center'>
                    <Notif/>
                </div>

                <Right/>
               
            </div>
            
        </div>

        
        
    </div>
  )
}

export default Header;