import NavLinks from "./NavLinks";

import Wrapper from "../assets/wrappers/Footer";

const Footer = () => {
    return (
        <Wrapper>
            <div className="layout footer-center">
                <NavLinks />
                <NavLinks />
                <NavLinks />
                <NavLinks />
                <NavLinks />
                <NavLinks />
                <div className="links"></div>
                <h5> <strong>Baskly</strong> &copy; 2024 All Rights Reserved. </h5>
            </div>

        </Wrapper>
    );
};
export default Footer;