import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../ContextApi/AuthProvider/AuthProvider";

const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext);
    const [theme, setTheme] = useState("light");
    // logoutUser

    const handleLogout = () => {
        logoutUser();
    }
    const themeChange = () => {
        if (theme === "light") {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
            setTheme("dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
            setTheme("light");
        }
    };

    const Links = <>
        <li><NavLink to="/" className="hover:text-red hover:bg-transparent transition-colors duration-75 mr-[2px]">Home</NavLink></li>
        <li><NavLink to="/allArts" className="hover:text-red hover:bg-transparent transition-colors duration-75 mr-[2px]">All Art & Craft Items</NavLink></li>
        <li><NavLink to="/addCraft" className="hover:text-red hover:bg-transparent transition-colors duration-75 mr-[2px]">Add Craft Item</NavLink></li>
        <li><NavLink to="/myArtList" className="hover:text-red hover:bg-transparent transition-colors duration-75 mr-[2px]">My Art & Craft List</NavLink></li>
        <li><NavLink to="/contactUs" className="hover:text-red hover:bg-transparent transition-colors duration-75 mr-[2px]">Contact Us</NavLink></li>
    </>

    return (
        <div className="w-full mb-16">
            {/* <!-- navbar start --> */}
            <nav data-aos="fade-down" data-aos-duration="500" data-aos-anchor-placement="top-bottom" data-aos-delay="50" className="top-0 z-10 mx-auto w-full max-w-[1264px] fixed shadow-sm">
                <div className="justify-center items-center">
                    <div className="navbar p-0 py-1 bg-base-100">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden -ml-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M4 6h16M4 12h8m-8 6h16" />
                                    </svg>
                                </div>
                                <ul tabIndex="0"
                                    className="menu menu-sm dropdown-content mt-3 md:mt-0 z-[10000] p-0 md:p-0 shadow bg-base-100 rounded-box w-52 font-medium">
                                    {Links}
                                    <label className="swap swap-rotate mb-4 mt-2 justify-start items-center ml-3">

                                        {/* this hidden checkbox controls the state */}
                                        <input onClick={() => themeChange(!theme)} type="checkbox" className="theme-controller" value="light" />

                                        {/* sun icon */}
                                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                        {/* moon icon */}
                                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                                    </label>
                                </ul>
                            </div>
                            <a className="-ml-2 md:ml-1 w-28 md:w-28" href="/"><img src={logo}></img></a>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal font-medium text-sm">
                                {Links}
                            </ul>
                            <label className="swap swap-rotate">

                                {/* this hidden checkbox controls the state */}
                                <input type="checkbox" onClick={() => themeChange(!theme)} className="theme-controller" value="synthwave" />

                                {/* sun icon */}
                                <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                {/* moon icon */}
                                <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                            </label>
                        </div>
                        <div className="navbar-end gap-1 md:gap-2">
                            {
                                user ?
                                    <div className="flex gap-1 items-center">
                                        <div className="dropdown dropdown-end dropdown-hover mt-1">
                                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                                <div className="w-11 rounded-full bg-blue p-1">
                                                    <img className="rounded-full" alt="user pic" src={user.photoURL ? user.photoURL : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                                                </div>
                                            </div>
                                            <ul tabIndex={0} className="menu bg-blue text-white border-2 border-red menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box">
                                                <div className="text-sm flex items-center justify-center">
                                                    <li className="w-full px-2 py-2 text-sm text-center font-semibold bg-red rounded-t-lg">User Profile</li>

                                                </div>
                                                <li className="px-2 mt-4 text-lg">
                                                    {user.displayName ? user.displayName : "UserName"}
                                                </li>
                                                <li className="px-2 mb-2 mt-1 text-sm">
                                                    {user.email ? user.email : "UserEmail"}
                                                </li>
                                                <li className="px-2 mb-2 mt-1 text-sm">
                                                    <Link to="/updateProfile" className="font-medium mb-2 mt-4 bg-red hover:bg-white shadow-xl text-white border border-red focus:text-red hover:text-red hover:bg-transparent transition-colors duration-75">Update Profile</Link>
                                                    <Link to="/login" onClick={() => handleLogout()} className="font-medium hover:bg-white shadow-xl bg-red text-white border border-red focus:text-red hover:text-red hover:bg-transparent transition-colors duration-75">Logout</Link>
                                                </li>

                                            </ul>
                                        </div>
                                        <NavLink to="/login" onClick={() => handleLogout()} className="btn mr-4 bg-red hover:bg-transparent border-red text-white hover:text-red rounded hover:border-red  hover:-translate-y-0 transition-all duration-200">Logout</NavLink>
                                    </div>
                                    :
                                    <div>
                                        <NavLink to="/login" className="btn mb-1 justify-center items-center bg-red hover:bg-transparent border-red text-white hover:text-red rounded hover:border-red  hover:-translate-y-0 transition-all duration-200">Login</NavLink>
                                        <NavLink to="/register" className="btn mr-4 ml-2 bg-red hover:bg-transparent border-red text-white hover:text-red rounded hover:border-red  hover:-translate-y-0 transition-all duration-200">Register</NavLink>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </nav>
            {/* <!-- navbar end --> */}
        </div>
    );
};

export default Navbar;