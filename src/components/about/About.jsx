import { useRef } from "react";
import "./about.scss";
import { motion, useInView } from "framer-motion";
import Navbar from '../navbar/Navbar';
import Contact from "../contact/Contact";

const Work = () => {
    return (
        <>
        <section className="navsection">
        <Navbar />
        </section>
            
            <section className="about-me">
            
                <div className="wrapper">
                    <div className="about-name">
                        <h2>About Me</h2>
                    </div>

                    <div className="about-me-container">
                        <div className="about-pic">
                            <img src="https://c.wallhere.com/photos/94/84/portrait_display_face_blonde_looking_at_viewer_model_women_depth_of_field_blue_eyes-1725467.jpg!d" alt="young girl (Afua Deborah) standing in front of yellow background" />
                        </div>

                        <div className="about-text">
                            <p>Hello World! I'm Afua Deborah, a Front-End Web Developer based out of Toronto.  From choreography on a stage to lines of code on a web page, I love combining the worlds of logic and creative design to make eye-catching, accessible, and user-friendly websites and applications.</p>

                            <p><span>Technology leads, society follows.</span> The move towards increasing inclusivity and diversity in the industry through representation is of importance to me.</p>

                            <p>I'm excited to make the leap and continue refining my skills with the right company. Drop me a line and/or your favourite restaurant in Toronto in the contact form <a href="#contact" tabindex="0">below</a> or check me out at:</p>
                            <ul class="socials">
                                <li tabIndex="0">
                                    <a href="https://github.com/afuadeborah"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-hidden="true"
                                        title="Go to Afua's Github">
                                        <span class="fab fa-github"></span>
                                    </a>
                                </li>

                                <li tabIndex="0">
                                    <a href="https://www.linkedin.com/in/meet-afua-frimpong/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-hidden="true"
                                        title="Go to Afua's LinkedIn">
                                        <span class="fab fa-linkedin"></span>
                                    </a>
                                </li>

                                <li tabIndex="0">
                                    <a href="https://twitter.com/afuadeborah_"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-hidden="true"
                                        title="Go to Afua's Twitter">
                                        <span class="fab fa-twitter"></span>
                                    </a>
                                </li>

                                <li tabIndex="0">
                                    <a href="https://medium.com/@afuafrimpong4"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-hidden="true"
                                        title="Go to Afua's blog on Medium">
                                        <span class="fab fa-medium-m"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </section>
            <section>
                <Contact/>
            </section>



        </>


    )
}

export default Work


{/* <section class="about-me" id="about">
            <div class="wrapper">
                
                <div class="about-name">
                    <h2>About Me</h2> 
                    <p>/ahFOO-ah dEb-ruh/</p>
                </div>  

                <div class="about-me-container"  style="overflow-x: hidden">
                    <div class="about-pic" data-aos="fade-right" data-aos-duration="1000">
                        <img src="./assets/afua-deborah.jpg" alt="young girl (Afua Deborah) standing in front of yellow background">
                    </div>

                    <div class="about-text" data-aos="fade-left" data-aos-duration="1000">
                        <p>Hello World! I'm Afua Deborah, a Front-End Web Developer based out of Toronto.  From choreography on a stage to lines of code on a web page, I love combining the worlds of logic and creative design to make eye-catching, accessible, and user-friendly websites and applications.</p>

                        <p><span>Technology leads, society follows.</span> The move towards increasing inclusivity and diversity in the industry through representation is of importance to me.</p>

                        <p>I'm excited to make the leap and continue refining my skills with the right company. Drop me a line and/or your favourite restaurant in Toronto in the contact form <a href="#contact" tabindex="0">below</a> or check me out at:</p>

                        <ul class="socials">
                            <li tabIndex="0">
                                <a href="https://github.com/afuadeborah"
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-hidden="true"
                                title= "Go to Afua's Github">
                                    <span class="fab fa-github"></span> 
                                </a>
                            </li>

                            <li tabIndex="0">
                                <a href="https://www.linkedin.com/in/meet-afua-frimpong/"
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-hidden="true"
                                title= "Go to Afua's LinkedIn">
                                    <span class="fab fa-linkedin"></span>
                                </a>
                            </li>

                            <li tabIndex="0">
                                <a href="https://twitter.com/afuadeborah_"
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-hidden="true"
                                title="Go to Afua's Twitter">
                                    <span class="fab fa-twitter"></span>
                                </a>
                            </li>

                            <li tabIndex="0">
                                <a href="https://medium.com/@afuafrimpong4"
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-hidden="true"
                                title="Go to Afua's blog on Medium">
                                    <span class="fab fa-medium-m"></span>
                                </a>
                            </li>
                        </ul> 
                    </div>
                </div>
            </div>
                
        </section> */}