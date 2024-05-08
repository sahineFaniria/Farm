import React from 'react';
import logo from "../../images/logo.png";
import creer from "../../images/creer.png";
import { Link } from 'react-router-dom';
import { Label } from "../ui/label";
import { Input } from '../ui/input';


const Signup = () => {
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
            <p className=' text-neutral-600 text-md font-semibold'>Créer un compte pour votre ferme</p>
        </div>
        <div class="input__wrapper">
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Email</Label> 
                <Input type="email" id="email" placeholder="rakoto@gmail.com" />
            </div>
        </div>
        <div class="input__wrapper">
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Password</Label> 
                <Input type="email" id="email" placeholder="********" />
            </div>
        </div>

        <Link to='/connect'>
            <button type="submit" class="my-form__button">
                Créer
            </button>
        </Link>

        
   
        <div class="my-form__actions">
            <div class="my-form__row">
                <span>J'ai déjà un compte?</span>
                <Link to='/login' title="Create Account">
                    Sign in
                </Link>
            </div>
        </div>
        <div className=' text-xs'>
            FarmFlow est là pour vous aider à prendre soin 
            de votre ferme d’élevage et de suivre leur santé 
            et leur alimentation. Connectez-vous votre ferme vous attend.
        </div>
        </form>
    </div>
  )
}

export default Signup
