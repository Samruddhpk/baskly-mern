import NavLinks from "./NavLinks";
import Wrapper from "../assets/wrappers/Sidebar";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ setShowSidebar }) => {

    return (
        <Wrapper>
            <NavLinks setShowSidebar={setShowSidebar} />
            <div className="close-btn" onClick={() => setShowSidebar(false)}>
                <FaTimes />
            </div>
        </Wrapper>
    );
};
export default Sidebar;