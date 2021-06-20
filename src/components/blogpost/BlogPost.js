import React from 'react';
import './BlogPost.css';

function BlogPost(props) {
    return (
        <div className='blogpost-container'>
            <figure className="blogpost-img-wrap">
                <img 
                src={props.src}
                className="blogpost-img"
                />
            </figure>
            <div className='blogpost-content-container'>
                <h1 className='blogpost-title'>{props.title}</h1>
                <span className='blogpost-divider'>{props.author  + "\t\t | \t\t" + props.date}</span>
                <p className='blogpost-content'>{props.content}</p>
            
            </div>
            </div>
    );
}

export default BlogPost;