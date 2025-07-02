import { Link } from "react-router-dom";
import {MAIN_ROUTE} from '../utils/utils.js'
import '../css/NavBar.css';

const NavBar = () => {
    

    return(
        <div className="nav-bar">
            <Link to = {MAIN_ROUTE} className="link-text">Головна</Link>
            <Link to = '/weather' className="link-text">Погода</Link>
            <Link to = '/suicideboys' className="link-text">SuicideBoys</Link>
            <Link to = '/bmw' className="link-text">BMW</Link>
        </div>
    )
}

export default NavBar;