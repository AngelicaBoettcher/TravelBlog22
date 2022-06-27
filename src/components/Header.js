import React from "react";
import { Link } from "react-router-dom";
import { FaUmbrellaBeach, FaConciergeBell } from "react-icons/fa";
import { IoIosBrush, IoIosLogIn } from "react-icons/io";
import './header.css';

function Header() {
    return (
        <div className="header">
            <Link to={'/'}><h1><FaUmbrellaBeach /> Angelicas Travel Guide</h1></Link>
            <nav>
                <Link to={'contact'}><FaConciergeBell /> Contact</Link>
                <Link to={'newpost'}><IoIosBrush /> Create</Link>
                <Link to={'login'}><IoIosLogIn /> Login</Link>
            </nav>    
        </div>
    );
}

export default Header;