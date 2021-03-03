import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
const MidBar = () => {
  return (
    <div
      id='midBar'
      style={{ backgroundColor: 'darkgray', paddingBottom: '50px' }}
    >
      <div className='shop'>Shop By Category </div>
      <div
        className='row'
        style={{
          margin: '20px',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Link to='/women'>
          <div className=' woman'>
            <img
              src='./capture4.png'
              className='image'
              alt='logo'
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </Link>
        <Link to='/women'>
          <div className='sale'>
            <span>Sale</span>
          </div>
        </Link>
        <Link to='/men'>
          <div className=' men'>
            <img
              src='./capture5.png'
              className='image'
              alt='logo'
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default MidBar
