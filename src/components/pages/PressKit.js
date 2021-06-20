// Presskit page

import React, {useState} from 'react'
import Info from '../info/Info';
import { homeObjOne, homeObjTwo, homeObjThree} from '../info/InfoData';
import News from '../news/News';
import HeroSection from '../hero/HeroSection';

const PressKit = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <HeroSection />
      <Info {...homeObjOne}/>
      <Info {...homeObjTwo}/>
      <News />
    </>
  )
}

export default PressKit