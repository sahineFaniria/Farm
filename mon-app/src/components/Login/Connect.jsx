import React from 'react';
import logo from "../../images/logo.png";
import creer from "../../images/connect.png";
import { Link } from 'react-router-dom';


const Connect = () => {
  return (
    <div className='login'>
        <form class="my-form">
        <div class="login-welcome-row flex">
            <a href="#" title="Logo">
                {/* <img src="assets/storeify.png" alt="Logo" class="logo"> */}
            </a>
            <img src={logo} alt="logo" className=" w-12" />
            <div>
                <p>FarmFlow</p>
            </div>
            
        </div>
        <div>
            <img src={creer} alt="logo" className="w-auto mb-4" />
            <p className=' text-neutral-600 text-md font-semibold'>A propos de votre ferme</p>
        </div>
        <div class="input__wrapper">
            <input type="email" id="email" name="email" class="input__field" placeholder="Your Email" required autoComplete='none'/>
            <label for="email" class="input__label">Nom du ferme</label>
            <svg class="input__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
            </svg>
        </div>
       
        <button type="submit" class="my-form__button">
            Se connecter    
        </button>
   
        <div className=' text-xs'>
            FarmFlow est là pour vous aider à prendre soin 
            de votre ferme d’élevage et de suivre leur santé 
            et leur alimentation. Connectez-vous votre ferme vous attend.
        </div>
        </form>
    </div>
  )
}

export default Connect
