import React, { useState } from 'react'
import './Navbar.scss'
import { images } from '../../constants'
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Navbar() {

    const [toggle, settoggle] = useState(false)

    return (
        <div id='Home'>
            <nav className='app__navbar'>
                <div className='app__navbar-logo'>
                    <img src={images.logo} alt="logo" />
                </div>
                <ul className='app__navbar-links'>
                    {['Home', 'About', 'Work', 'Skills', 'Testimonials', 'Contact'].map((item) => (
                        <li key={`link-${item}`} className="app__flex p-text">
                            <div />
                            <a href={`#${item}`}>{item}</a>
                        </li>
                    ))}
                </ul>

                <div className='app__navbar-menu'>
                    <HiMenuAlt4 onClick={() => settoggle(true)} />
                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        <HiX onClick={() => settoggle(false)} />
                        <ul>
                            {['Home', 'About', 'Work', 'Skills', 'Testimonials', 'Contact'].map((item) => (
                                <li key={item} className="">
                                    <a href={`#${item}`} onClick={() => settoggle(false)}>{item}</a>
                                </li>
                            ))}
                            </ul>
                    </motion.div>
                )}
                </div>
            </nav>
        </div>
    )
}
