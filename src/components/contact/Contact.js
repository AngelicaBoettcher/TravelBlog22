import React from "react";
import './contact.css';

const Contact = () => {
    return (
        <div className="wrapper">
            <div className="wrapped">
                <div className="contactPage">
                    <h2>Contact</h2>
                    <div className="about">
                        This project was made by using React, node.js and MongoDB. It also uses the Google Maps API to display pins on certain locations. This page is a final project of the Hamburg Coding School.
                    </div>
                    <div className="madeBy">
                        <p className="ab">Angelica Böttcher (student)</p>
                        <p><strong>HCS Hamburg Coding School GmbH</strong></p>
                        <p>Borselstraße 7</p>
                        <p>22765 Hamburg</p>
                        <p>E-Mail: <a href="mailto:teresa@hamburgcodingschool.com">teresa@hamburgcodingschool.com</a></p>
                        <p>Phone: <a href="tel:00494022863615">+49 40 22863615</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;