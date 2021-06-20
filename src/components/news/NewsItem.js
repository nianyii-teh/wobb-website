// Card for news items in press kit

import React from 'react';
import { Link } from 'react-router-dom';

function NewsItem(props) {
    return (
        <>
            <li className='news__item'>
                <Link className="news__item__link" to={props.path}>
                    <figure 
                        className="news__item__pic-wrap" >
                            <img 
                            src={props.src}
                            className="news__item__img"
                            alt="Photo"
                            />
                    </figure>
                    <div className='news__item__info'>
                        <h5 className='news__item__text'>
                            {props.text}
                        </h5>
                        <p className='news__item__content'>
                            {props.content}
                        </p>
                        <span>{props.author  + "\t\t | \t\t" + props.date}</span>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default NewsItem;