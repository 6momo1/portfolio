import React from 'react'
import './about.scss'
import cactus from '../../images/cactus.jpeg'
const About = () => {
  return (
    <div className='portfolio' id='about'>
      <h1>About Me:</h1>
      <div className='textContainer'>

        <p>Hello! My name is Tomi and I am currently working as a software engineer at <span>Realtor.com</span>. I also do freelancing on the side! I design specialize in designing modern websites and develop web services and web stores. On my free time, I also like to do some drawing and painting. Check them out below! </p>

        <img src={cactus}></img>
      </div>
    </div>
  )
}

export default About