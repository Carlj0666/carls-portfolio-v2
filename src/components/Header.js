import React from "react";
import Typed from "react-typed";


const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Carl Jehle</h1>
                <Typed className="typed-text"
                strings={["Full Stack Software Engineer"]}
                typeSpeed={100}
                backSpeed={60}
                loop
                />
                <a href="mailto:carlj1881@protonmail.com" className="btn-contact">Contact Me</a>
            </div>

        </div>
        
    )
}

export default Header;