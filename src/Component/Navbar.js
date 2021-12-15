import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { GalleryItem } from "./GalleryItem"

import './Navbar.css';



function Navbar() {

    // burger click
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [button, setButton] = useState(true)

    const closeMobileMenu = () => setClick(false);

    // responsive navbar
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };
// hide sign up button when we refresh
    useEffect(() => {
        showButton();
    }, []);

window.addEventListener('resize', showButton)


    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                        <i class="fas fa-birthday-cake">  Dream Taste </i>

                    </Link>

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
        </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/Gallery' className='nav-links' onClick={closeMobileMenu}>
                                Gallery
        </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>
                                Contact
        </Link>
                        </li>



                        <li className='nav-item'>
                            <Link to='/Order-Online' id="button" className='nav-links' onClick={closeMobileMenu}>
                            Order Online
        </Link>
                        </li>

                
                        

                    </ul>

                    
                    {/* {button && <Button buttonStyle='btn--outline'>Order Online</Button>} */}
                    
                </div>
            </nav>
        </>
    )
}

export default Navbar
