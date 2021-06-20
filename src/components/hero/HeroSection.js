// Top section used in presskit page

import React from 'react';
import './HeroSection.css';
import { Button } from '../button/Button';
import '../../App.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>Our Company</h1>
            <p>Lorem ipsum dolor sit ame. </p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                    Download presskit                
                </Button>
            </div>
        </div>
    )
}

export default HeroSection