import "./Nav.css";
import { Link } from 'react-router-dom';

function NavBar(){
    return(
        <header id="navbar">
            <h1 className="logo">E Voting</h1>
            <nav>
                <ul className="navlinks">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/play">Create Election</Link></li>
                </ul>
            </nav>
            <Link to="/Login" className="cta"><button>Login</button></Link>
        </header>
    )
}

export default NavBar;