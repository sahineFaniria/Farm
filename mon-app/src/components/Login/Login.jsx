import React from 'react';
import logo from "../../images/logo.png";
import { Link } from 'react-router-dom';


const Login = () => {
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
            1\
        </div>
        <div>
            <p className=' text-neutral-600 text-xl font-semibold'>S'identifier</p>
        </div>
        <div class="input__wrapper">
            <input type="email" id="email" name="email" class="input__field" placeholder="Your Email" required autoComplete='none'/>
            <label for="email" class="input__label">Email:</label>
            <svg class="input__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
            </svg>
        </div>
        <div class="input__wrapper">
            <input id="password" type="password" class="input__field" placeholder="Your Password"
                title="Minimum 6 characters at least 1 Alphabet and 1 Number"
                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$" required autoComplete='none'/>
            <label for="password" class="input__label">
                Password
            </label>
            <svg class="input__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z"></path>
                <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
                <path d="M8 11v-4a4 4 0 1 1 8 0v4"></path>
            </svg>
        </div>
        <button type="submit" class="my-form__button">
            Se connecter
        </button>
   
        <div class="my-form__actions">
            <div class="my-form__row">
                <span>Pas de compte?</span>
                <Link to='/signup' title="Create Account">
                    Sign Up
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

export default Login
