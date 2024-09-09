import heroImg from "../assets/images/landing.svg";
import Wrapper from "../assets/wrappers/Landing";
import { Link } from "react-router-dom";


const Hero = () => {
    return (
        <Wrapper>
            <div className="title">
                <h2>Welcome to <br /> Baskly</h2>
                <p>Discover a world of curated products with ease. <br /> Enjoy a seamless shopping experience that brings <br /> your   favorite items to your fingertips.
                </p>
                <Link to="/products">
                    <button className="btn hero-btn">Catalog</button>
                </Link>
            </div>
            <div className="img-container">
                <img src={heroImg} alt="hero" />
            </div>

        </Wrapper>
    );
};
export default Hero;