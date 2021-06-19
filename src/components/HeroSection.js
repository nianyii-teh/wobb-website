import React from 'react';
import './HeroSection.css';
import { Button } from './Button';
import '../App.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='./videos/video-1.mp4' autoPlay loop muted /> 
            <h1>Title</h1>
            <p>Some text</p>
            <div className='hero-btns'>
                <Button 
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                    WATCH TRAILER                
                </Button>
            </div>
        </div>
    )
}

export default HeroSection