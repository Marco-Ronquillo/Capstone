import { Link } from 'react-router-dom';
function Header(){
    return(
        <header>
            <h1>
                Hospital Management System
            </h1>

            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-item"><a href="/">Home</a></li>
                    <li className="navbar-item"><a href="/about">About</a></li>
                    <li className="navbar-item"><a href="/services">Services</a></li>
                    <li className="navbar-item"><a href="/contact">Contact</a></li>
                </ul>
            </nav>

            
            
        </header>
    )
}

export default Header