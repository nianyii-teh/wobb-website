import './Cards.css';
import CardItem from './CardItem';
import img1 from '../../images/img-1.jpg';
import img2 from '../../images/img-2.jpg';
import img3 from '../../images/img-3.jpg';
import img4 from '../../images/img-4.jpg';
import img5 from '../../images/img-5.jpg';


function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img1}
              text='5 Productivity Tips to Stay Motivated during WFH'
              label='Productivity'
              path='/blog'
              content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et porttitor sapien. Fusce in erat eget neque efficitur sodales. Quisque...'
              author='Alice'
              date='1 June 2021'
            />
            <CardItem
              src={img2}
              text='Maintaining Good Dynamics within a Team'
              label='Work'
              path='/blog'
              content='Vivamus blandit nisi velit, dignissim dapibus libero condimentum facilisis. Fusce ut sagittis ipsum, pharetra vulputate sem. Morbi fringilla, eros vel...'
              author='Bob'
              date='15 May 2021'
            />
            <CardItem
              src={img3}
              text='The Importance of Reflection'
              label='Improvement'
              path='/blog'
              content='Phasellus ac urna ultrices tellus finibus tempor. Vivamus maximus laoreet congue. Nullam id arcu non lacus porttitor fermentum. Quisque at odio...'
              author='Chris'
              date='1 May 2021'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img4}
              text='Lorem ipsum dolor sit amet'
              label='Improvement'
              path='/blog'
              content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et porttitor sapien. Fusce in erat eget neque efficitur sodales. Quisque...'
              author='Emily'
              date='21 April 2021'
            />
            <CardItem
              src={img5}
              text='Lorem ipsum dolor sit amet'
              label='Work'
              path='/blog'
              content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et porttitor sapien. Fusce in erat eget neque efficitur sodales. Quisque...'
              author='Michael'
              date='12 March 2021'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
