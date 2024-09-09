import links from "../utils/links";
import { NavLink } from "react-router-dom";


const NavLinks = () => {
    return (
        <ul>
            {links.map((link) => {
                const { path, text } = link;
                return <NavLink to={path} key={text} >{text}</NavLink>;
            })}
        </ul>
    );
};
export default NavLinks;