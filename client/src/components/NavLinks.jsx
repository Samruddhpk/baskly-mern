import links from "../utils/links";
import { NavLink } from "react-router-dom";


const NavLinks = ({ setShowSidebar }) => {
    return (
        <ul>
            {links.map((link) => {
                const { path, text } = link;
                return <NavLink to={path} key={text} onClick={() => setShowSidebar(false)}>{text}</NavLink>;
            })}
        </ul>
    );
};
export default NavLinks;