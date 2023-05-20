import "./Header.module.css"
import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <header>
            <nav>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/aboutus">About Us</Link>
                    <Link to="/contacts">Contacts</Link>
                </ul>
            </nav>
        </header>
    )
}
export default Header