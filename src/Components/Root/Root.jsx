import { Outlet } from "react-router-dom";
import Navbar from "../../assets/Shered/Navbar/Navbar";
import Footer from "../../assets/Shered/Footer/Footer";

const Root = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Root;