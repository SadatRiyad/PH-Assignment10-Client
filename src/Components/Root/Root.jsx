import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../../Shered/Navbar/Navbar";
import Footer from "../../Shered/Footer/Footer";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


const Root = () => {
    return (
        <>
            <ScrollRestoration />
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />
        </>
    );
};

export default Root;