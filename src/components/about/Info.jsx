import React, { useEffect } from 'react'
import './about.scss'
const Info = ({ pData, h1Data, imgData, bullets, h1Data2, bullets2, pData2 }) => {

  function IdiomaticReactList(props) {
    if (props == undefined) return;
    return (
      <ul className='list'>
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
    <>
      <div className='portfolio' id='about'>
        <h1>{h1Data}</h1>
        <div className='textContainer'>

          <div className='paragraph'>
            <p>{pData}</p>
          </div>
          {IdiomaticReactList(bullets)}
          {imgData ? <img src={imgData} /> : <></>}
        </div>


        <h1>{h1Data2}</h1>
        <div className='textContainer'>
          {pData2? 
          <div className='paragraph'>
            {pData2}
          </div>
: <></>}
          {IdiomaticReactList(bullets2)}
        </div>

      </div>
    </>
  )
}

export default Info