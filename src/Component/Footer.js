import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-wrap">
                <p className='footer-wrap-heading'>
                    FOLLOW US
                </p>
            </section>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    {/* <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                        <i class="fas fa-birthday-cake"/> Dream Taste 
                        </Link>
                    </div> */}
                </div>
                <div className='social-icons'>
                    <Link
                        className='social-icon-link facebook'
                        to='/'
                        target='_blank'
                        aria-label='Facebook'>
                        <i className='fab fa-facebook-f' />
                    </Link>
                    <Link
                        className='social-icon-link instagram'
                        to='/'
                        target='_blank'
                        aria-label='Instagram'>
                        <i className='fab fa-instagram' />
                    </Link>
                    <Link
                        className='social-icon-link envelope'
                        to='/Contact'
                        target='_blank'
                        aria-label='envelope'>
                        <i class="far fa-envelope"></i>
                    </Link>
                </div>

            </section>
            <small className='website-rights'>DreamTaste @ 2021</small>
        </div>
    )
}

export default Footer;
