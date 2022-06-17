import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { FaUmbrellaBeach, FaConciergeBell } from "react-icons/fa";
import { IoIosBrush, IoIosLogIn } from "react-icons/io";
import Contact from "./contact/Contact";
import CreatePost from "./createpost/CreatePost";
import LoginEl from "./login/Login";

function Header() {
    return (
        <div className="Header">
            
            <h1><FaUmbrellaBeach />Travel Guide 2</h1>
            <nav>
                <Link to={'contact'}><FaConciergeBell />Contact</Link>
                <Link to={'newpost'}><IoIosBrush />Create</Link>
                <Link to={'login'}><IoIosLogIn />Login</Link>
            </nav>
            <Routes>
                <Route path="contact" element={<Contact />} />
                <Route path="newpost" element={<CreatePost />} />
                <Route path="login" element={<LoginEl />} />
            </Routes>
        </div>
    );
}

export default Header;