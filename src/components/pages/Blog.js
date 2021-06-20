// Sample blog post page

import React from 'react';
import '../../App.css';
import BlogPost from '../blogpost/BlogPost';
import img4 from '../../images/img-4.jpg';

function Blog() {
    return (
        <BlogPost 
            title="Lorem ipsum dolor sit amet"
            src={img4}
            author='Emily'
            date='21 April 2021'
            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada lorem a est pulvinar, ac mollis sapien tincidunt. Ut massa nulla, aliquet eget pulvinar ut, sagittis in magna. Aenean posuere interdum urna, a egestas mauris fringilla id. Ut porta aliquam facilisis. Integer aliquet vel eros non fringilla. Cras quis semper dolor. Phasellus ut magna elit.In lobortis accumsan tortor id bibendum. Morbi sed erat arcu. In non tellus gravida quam gravida laoreet eu eu neque. Sed ut tortor sagittis, varius dui quis, placerat mi. Sed ullamcorper tincidunt porta. Sed finibus blandit nunc eget pretium. Nulla feugiat turpis sed risus porta vehicula.'    
    />
    )
}

export default Blog;