import { Outlet } from "react-router-dom";
import { Navbar, Footer, Header } from "../components";

const HomeLayout = () => {
    return (
        <>
            <Header />
            <Navbar />
            <div className="layout">
                <Outlet />
            </div>
            {/* <Footer /> */}
        </>
    );
};
export default HomeLayout;