// News section on press kit page

import './News.css';
import NewsItem from './NewsItem';
import img6 from '../../images/img-6.jpg';
import img7 from '../../images/img-7.jpg';
import img5 from '../../images/img-5.jpg';

function News() {
  return (
      <div className='news'>

        <div className='news__container'>
        <h1 className='news__title'>In the news</h1>
      
        <div className='news__wrapper'>
          <ul className='news__items'>
            <NewsItem
              src={img6}
              text='Lorem ipsum dolor sit'
              path='/blog'
              content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et porttitor sapien. Fusce in erat eget neque efficitur sodales. Quisque...'
              author='Sin Chew Daily'
              date='June 2021'
            />
            <NewsItem
              src={img7}
              text='Lorem ipsum dolor sit'
              path='/blog'
              content='Vivamus blandit nisi velit, dignissim dapibus libero condimentum facilisis. Fusce ut sagittis ipsum, pharetra vulputate sem. Morbi fringilla, eros vel...'
              author='The Edge'
              date='May 2021'
            />
            <NewsItem
              src={img5}
              text='Lorem ipsum dolor sit'
              path='/blog'
              content='Phasellus ac urna ultrices tellus finibus tempor. Vivamus maximus laoreet congue. Nullam id arcu non lacus porttitor fermentum. Quisque at odio...'
              author='The Sun'
              date='December 2020'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default News;