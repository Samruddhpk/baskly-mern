import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components";

const HomeLayout = () => {
    return (
        <>
            <Navbar />
            <div className="layout">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};
export default HomeLayout;