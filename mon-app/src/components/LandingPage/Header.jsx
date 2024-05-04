import React from "react";
import logo from "../../images/logo.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faUser} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


const Header = () => {


    return(
        <header className="bg-[#E2E4F1] w-full py-3 flex items-center flex-wrap justify-between ">
            <div className=" container mx-auto  flex items-center flex-wrap justify-between ">
                <div className="flex items-center">
                    <img src={logo} alt="logo" className=" w-12" />
                    <p className=" text-xl font-bold text-[#605DFF]">FarmFlow</p>
                </div>
                <div className="">
                    <ul className=" flex items-center gap-12">
                        <li className=" text-[#424662] link">Home</li>
                        <li className=" text-[#424662] link">About</li>
                        <li className=" text-[#424662] link">Contact</li>
                    </ul>
                </div>
                <div className=" flex gap-4">
                    <Link to="/login" > <button className=" border-solid border-2 rounded px-2 border-[#858baf] ">Sign in</button> </Link>
                    <Link to='/signup'><button className=" border-solid border-2 rounded px-2 border-[#605DFF] text-[#605DFF]">Sign up</button></Link>
                </div>
            </div>
        </header>
    )
}


export default Header;