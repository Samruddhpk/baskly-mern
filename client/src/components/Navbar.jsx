import NavLinks from "./NavLinks";
import Sidebar from "./Sidebar";
import Wrapper from "../assets/wrappers/Navbar";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Logo from "./Logo";

const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <Wrapper>
            <div className="nav-left">
                <Logo />
                <div className="toggle" onClick={() => setShowSidebar(!showSidebar)}>
                    <FaBars />
                </div>
                {showSidebar && <Sidebar setShowSidebar={setShowSidebar} />}
            </div>

            <div className="nav-center">
                <div className="links">
                    <NavLinks />
                </div>
            </div>


        </Wrapper>
    );
};
export default Navbar;