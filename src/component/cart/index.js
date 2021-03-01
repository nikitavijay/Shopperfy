import React,{useState,useContext} from 'react'
import NavBar from '../navbar'
import {CartContext} from './../routes'

const Cart = () => {
    const[items,setItems] = useState({})
    const value=  useContext(CartContext)
    console.log(value)
  return (
    <div>
      <NavBar />
      <div
        style={{
          height: '50px',
          backgroundColor: 'ghostwhite',
          margin: '30px',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <h5 style={{ display: 'inline-block' }} className='headingStyle'>
          Your Cart
        </h5>
      </div>
    </div>
  )
}

export default Cart
