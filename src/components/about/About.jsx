import React from 'react'
import './about.scss'
import { customImage } from '../../data'
const About = () => {
  return (
    <div className='portfolio' id='about'>
      <h1>About Me:</h1>
      <div className='textContainer'>

        <div className='container2'>
          <p>Hello! My name is Tomi and I am currently working as a software engineer at <span>Realtor.com</span>. I also do freelancing on the side! I specialize in designing modern websites and develop web services and web stores. On my free time, I also like to 3D model, draw and paint. Check them out below! </p>

        </div>

        <img src={customImage.car}></img>
      </div>
    </div>
  )
}

export default About