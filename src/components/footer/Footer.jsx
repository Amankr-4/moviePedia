import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                Welcome to our digital haven for movie enthusiasts! Immerse yourself in a world where movie magic meets curated content. Explore a diverse collection of film information, trivia, and exclusive videos that transcend genres and eras. From behind-the-scenes glimpses to insightful anecdotes, our platform is a cinematic treasure trove. Discover hidden gems, follow your favorite stars, and redefine your movie experience with a curated selection that brings the silver screen to life. Welcome to a space where every click unveils a new chapter in the rich tapestry of film entertainment.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;