import React from "react";
import { Link } from "react-router-dom";
import { FaUmbrellaBeach, FaConciergeBell } from "react-icons/fa";
import { IoIosBrush, IoIosLogIn } from "react-icons/io";

function Header() {
    return (
        <div className="Header">
            
            <h1><FaUmbrellaBeach />Travel Guide 2</h1>
            <nav>
                <Link to={'contact'}><FaConciergeBell />Contact</Link>
                <Link to={'newpost'}><IoIosBrush />Create</Link>
                <Link to={'login'}><IoIosLogIn />Login</Link>
            </nav>
            
        </div>
    );
}

export default Header;