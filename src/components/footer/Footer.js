import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';


function Footer() {
    return (
      <div className='footer-container'>
        
        <div class='footer-links'>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h2>WOBB</h2>
              <Link to='/blog'>Blog</Link>
              <Link to='/presskit'>Press Kit</Link>
              </div>
            
            <div class='footer-link-items'>
              <h2>Get Social</h2>
              <div class='social-icons'>
              <Link
                class='social-icon-link facebook'
                to='/'
                target='_blank'
                aria-label='Facebook'
              >
                <i class='fab fa-facebook-f' />
              </Link>
              <Link
                class='social-icon-link instagram'
                to='/'
                target='_blank'
                aria-label='Instagram'
              >
                <i class='fab fa-instagram' />
              </Link>
 
              <Link
                class='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='Twitter'
              >
                <i class='fab fa-twitter' />
              </Link>
              <Link
                class='social-icon-link linkedin'
                to='/'
                target='_blank'
                aria-label='LinkedIn'
              >
                <i class='fab fa-linkedin' />
              </Link>
            </div>
            </div>
            <div class='footer-link-items'>
              <h2>Our Mission</h2>
              <p>We are on an unwavering mission to be Asia’s most loved job search platform; helping people discover any job with any employer in the market. </p>
            </div>
          </div>
        </div>
        <section class='social-media'>
          <div class='social-media-wrap'>
            <div class='footer-logo'>
              <Link to='/' className='social-logo'>
                WOBB
              </Link>
            </div>
            <small class='website-rights'>Copyright</small>
            
          </div>
        </section>
      </div>
    );
  }
  

export default Footer;