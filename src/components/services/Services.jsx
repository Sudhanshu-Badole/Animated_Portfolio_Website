import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      
      <section className="skills">
            <div className="wrapper">

                <h2><span>Skills</span></h2>
            
                <ul className="skills-container">

                    <li className="skills-title">
                        <span aria-hidden="true" className="devicons devicons devicons-python" title="HTML5"></span>
                        
                        <p>Python</p>
                    </li>
                    <li className="skills-title">
                      
                        <span aria-hidden="true" className="devicons devicons devicons-django" title="HTML5"></span>
                        
                        <p>Django</p>
                    </li>
                    <li className="skills-title">
                      
                        <span aria-hidden="true" className="devicons devicons devicons-html5" title="HTML5"></span>
                        
                        <p>HTML5</p>
                    </li>

                    <li className="skills-title">
                        <span aria-hidden="true"  className="devicons devicons-css3" title="CSS"></span>
                        <p>CSS</p>
                    </li>
                    <li className="skills-title">
                        <span aria-hidden="true"  className="devicon-tailwindcss-plain" title="tailwindcss"></span>
                        <p>tailwindcss</p>
                    </li>

                    <li className="skills-title">
                        <span aria-hidden="true" className="devicons devicons-javascript_badge" title="JavaScript & ES6"></span>
                        <p>JavaScript + ES6</p>
                    </li>

                    <li className="skills-title">
                        <span aria-hidden="true" className="devicons devicons-sass" title="SASS"></span>
                        <p>Sass</p>
                    </li>

                    <li className="skills-title">
                        <span aria-hidden="true" className="devicon-mysql-plain-wordmark" title="MySQL"></span>
                        <p>MySQL</p>
                    </li>

                    <li className="skills-title">
                        <span aria-hidden="true" className="devicon-postgresql-plain" title="PostgreSQL"></span>
                        <p>PostgreSQL</p>
                    </li>

                    <li className="skills-title">
                        <span aria-hidden="true" className="material-icons">settings_ethernet</span>
                        <p>REST APIs</p>
                    </li>
                
                    <li className="skills-title">
                        <span aria-hidden="true" className="devicons devicons devicon-react-original" title="React"></span>
                        <p>React</p>
                    </li>

                    <li className="skills-title">
                        <span aria-hidden="true" className="devicons devicons-firebase" title="Firebase"></span>
                        <p>Firebase</p>
                    </li>
                
                    <li className="skills-title">
                        <span aria-hidden="true" className="devicons devicons-git" title="Git"></span>
                        <p>Git</p>
                    </li>
                    
                    <li className="skills-title">
                        <span aria-hidden="true" className="devicons devicons-terminal_badge" title="Terminal"></span>
                        <p>Terminal</p>
                    </li>
                    <li className="skills-title">
                        <span aria-hidden="true" className="devicons devicon-linux-plain" title="linux"></span>
                        <p>Linux</p>
                    </li>
        
                    <li className="skills-title">
                        <span aria-hidden="true" className="devicons devicons-responsive" title="Responsive Design"></span>
                        <p>Responsive
                        <br/>
                        Design</p>
                    </li>

                    <li className="skills-title">
                        <span aria-hidden="true" className="fas fa-universal-access" title="Accessibility"></span>
                        <p>Accessibility</p>
                    </li>

                </ul>

            </div>
        </section>
    </motion.div>
  );
};

export default Services;



