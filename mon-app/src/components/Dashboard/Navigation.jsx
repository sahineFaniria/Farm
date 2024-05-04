import React from 'react'
import logo from "../../images/logo.png";
import expand from "../../images/expand.svg";
import home from "../../images/home.svg";
import projects from "../../images/projects.svg";
import dashboard from "../../images/dashboard.svg";
import task from "../../images/tasks.svg";
import setting from "../../images/settings.svg";
import profile from "../../images/profile-pic.jpg";
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
        <div className="nav">
                <div className="sidebar-header">
                    <a className="logo-wrapper">
                        <img src={logo} alt="logo image" />
                        <h2 className="hidd logo">FarmFlow</h2>
                    </a>
                    {/* <button className="toggle-btn">
                    <img src={expand} alt="expand" />
                    </button> */}
                </div>


                <div className="sidebar-links">
                    <NavLink className="link" to="/dashboard/accueil">
                        <img src={home} alt="home" />
                        <span className="hidd">Dashboard</span>
                    </NavLink>
                    <NavLink className="link" to="/dashboard/animaux">
                        <img src={projects} alt="projet" />
                        <span className="hidd">Animaux</span>
                    </NavLink>
                    <NavLink className="link" to="/dashboard/traitement">
                        <img src={dashboard} alt="image" />
                        <span className="hidd">Traitement et vente</span>
                    </NavLink>
                    <NavLink className="link" to="/dashboard/production">
                        <img src={task} alt="task image" />
                        <span className="hidd">Production</span>
                    </NavLink>
                    <NavLink className="link" to="/dashboard/stock">
                    <img src={projects} alt="projet" />
                        <span className="hidd">Stock</span>
                    </NavLink>
                    <NavLink className="link" to="/dashboard/test">
                    <img src={projects} alt="projet" />
                        <span className="hidd">Test</span>
                    </NavLink>
                </div>


                <div className="sidebar-bottom">
                   
                    <div className="user-profile">
                        <div className="user-avatar">
                            <img src={setting} alt="profile image" />
                        </div>
                        <div className="user-details hidd">
                            <Link className='username' to="/">Se déconnecter</Link>
                        </div>
                    </div>
                </div>


            </div>
    </div>
  )
}

export default Navigation
