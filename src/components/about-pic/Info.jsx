import React, { useEffect } from 'react'
import './about.scss'
const Info = ({ pData, h1Data, imgData, bullets }) => {

  function IdiomaticReactList(props) {
    if (props == undefined) return;
    return (
      <ul>
        {props.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    );
  }

  useEffect(() => {
    console.log(imgData);
    console.log(bullets)
  }, [])
  return (
    <div className='portfolio' id='about'>
      <h1>{h1Data}</h1>
        {IdiomaticReactList(bullets)}
      <div className='textContainer'>

        <div className='paragraph'>
          <p>{pData}</p>
        </div>
        <ul>
          {bullets ? bullets.forEach((text, i) => {
            return (<li className='paragraph'>{text}</li>)
          }) : <></>}
        </ul>

        {imgData ? <img src={imgData} /> : <></>}
      </div>
    </div>
  )
}

export default Info