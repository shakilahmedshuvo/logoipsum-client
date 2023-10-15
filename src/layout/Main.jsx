import { Outlet } from "react-router-dom";
import Navbar from "../Componenets/HomePage/Navbar/Navbar";
import Footer from "../Componenets/HomePage/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;