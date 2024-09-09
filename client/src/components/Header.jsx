import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Header";

const Header = () => {
    return (
        <Wrapper>
            <Link to="/register">
                <button className="header-btn">Create an Account</button>
            </Link>
            <Link to="/login">
                <button className="header-btn">Login</button>
            </Link>
        </Wrapper>
    );
};
export default Header;