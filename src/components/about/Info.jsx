import React, { useEffect } from 'react'
import './about.scss'
import { customImage } from '../../data'
const Info = ({pData, h1Data, imgData}) => {
  useEffect(()=> {
console.log(imgData);
  },[])
  return (
    <div className='portfolio' id='about'>
      <h1>{h1Data}</h1>
      <div className='textContainer'>

        <div className='paragraph'>
          <p>{pData}</p>
        </div>
        {imgData != undefined? <img src={imgData}/> : <></>}
      </div>
    </div>
  )
}

export default Info