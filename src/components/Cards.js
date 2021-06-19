import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check this out</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="../images/img-9.jpg"
                            text="Explore"
                            label="Adventure"
                            path='/'
                        />
                        <CardItem
                            src="./images/img-9.jpg"
                            text="Products"
                            label="Luxury"
                            path='/products'
                        />
                    </ul>

                    <ul className="cards__items">
                        <CardItem
                            src="./images/img-3.jpg"
                            text="Services"
                            label="Mystery"
                            path='/services'
                        />
                        <CardItem
                            src="./images/img-9.jpg"
                            text="Signup"
                            label="Adrenaline"
                            path='/signup'
                        />
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Cards;