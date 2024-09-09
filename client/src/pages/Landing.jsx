import heroImg from "../assets/images/landing.svg";
import Wrapper from "../assets/wrappers/Landing";

const Landing = () => {
    return (
        <Wrapper>
            <div className="title">
                <h2>Welcome to <br /> Baskly</h2>
                <p>Discover a world of curated products with ease. <br /> Enjoy a seamless shopping experience that brings your  <br /> favorite items to your fingertips.
                </p>
            </div>
            <div className="img-container">
                <img src={heroImg} alt="hero" />
            </div>
        </Wrapper>
    );
};
export default Landing;