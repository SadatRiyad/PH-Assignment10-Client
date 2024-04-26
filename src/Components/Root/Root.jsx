import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../../Shered/Navbar/Navbar";
import Footer from "../../Shered/Footer/Footer";


const Root = () => {
    return (
        <>
            <ScrollRestoration />
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Root;