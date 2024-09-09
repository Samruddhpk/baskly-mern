import NavLinks from "./NavLinks";
import Wrapper from "../assets/wrappers/Navbar";

const Navbar = () => {
    return (
        <Wrapper>
            <div className="nav-center">
                <NavLinks />
            </div>
        </Wrapper>
    );
};
export default Navbar;