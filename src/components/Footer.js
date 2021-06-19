import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Footer.css';


function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the newsletter
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input"/>
                            <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                    </div>
                </div>
            </div>

            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            TRVL <i className='fab fa-typo3'></i>
                        </Link>
                    </div>
                    <small className='website-rights'>TRVL 2020</small>
                    <div className='social-icons'>
                        <Link
                            className="social-icon-link facebook"
                            to='/'
                            target='_blank'
                            aria-label="Facebook">

                        </Link>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Footer;