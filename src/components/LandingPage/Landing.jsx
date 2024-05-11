import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons';



const Landing = () => {



    return(
        <div className="fond w-full h-[700px] brightness-75 flex flex-col items-center justify-center">
            <p className='text-white text-5xl text-center'>Une gestion agricole plus<br/> facile commence ici.</p>
            <Link to="/dashboard">
                <Button>Dashboard</Button>
            </Link>
            
        </div>
    )
}


export default Landing;