import React from 'react';
import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from '../sidebar/Sidebar';
const Navbar = () => {
    return (
        <div className='navbar'>
            {/* sidebar */}
            <Sidebar />
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}>
                    <a href="/">
                        Sudhanshu
                    </a>
                </motion.span>
                <div className="social">
                    <a href="#">
            <i className="devicon-linkedin-plain"></i>
          
                    </a>
                    <a href="#">
                        <i className="devicon-github-original"></i>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Navbar