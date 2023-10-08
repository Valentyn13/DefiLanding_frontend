import { Outlet } from "react-router-dom";
import NavbarUseDefi from "../../UseDefi/NavbarUseDefi/NavbarUseDefi";
import Footer from "../Footer/Footer";

const UseDefiLayout =() => {


    return (
        <>
        <NavbarUseDefi/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default UseDefiLayout;