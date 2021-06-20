// Card for blog posts

import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
    return (
        <>
            <li className='cards__item'>
                <Link className="cards__item__link" to={props.path}>
                    <figure 
                        className="cards__item__pic-wrap" 
                        data-category={props.label}>
                            <img 
                            src={props.src}
                            className="cards__item__img"
                            alt="Photo"
                            />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>
                            {props.text}
                        </h5>
                        <p className='cards__item__content'>
                            {props.content}
                        </p>
                        <span className='card-divider'>{props.author  + "\t\t | \t\t" + props.date}</span>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem;