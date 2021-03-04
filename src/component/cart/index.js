import React, { useState } from 'react'
import { useContext, useSelector,useDispatch } from 'react-redux'
import NavBar from '../navbar'
import {store} from '../redux/store'
import StarIcon from '@material-ui/icons/Star'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const Cart = () => {
  const variable = useSelector(state => (state ? state.items : null))
  const [data, setData] = useState(variable)
  const dispatch = useDispatch()
  const buyNow = item => {
    var action = {
      type: 'REMOVEITEM',
      payload: item
    }
    dispatch(action)
    setData(data.filter(i => i.id !== item.id))
    toast.success('Order Placed Successfully!', {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }
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
      <div>
        {data &&
          data.map(item => {
            return (
              <div
                className='card cardstyle hover-shadow'
                style={{ width: '275px', margin: '0px 30px' }}
              >
                {data && (
                  <img
                    className='card-img-top cardimage hover-shadow'
                    src={item.image.url}
                    alt='Card image cap'
                  />
                )}
                <div className='card-body'>
                  <div style={{ textAlign: 'center' }}>
                    <span className='cardtitle'>{item.name}</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      margin: '10px 0px'
                    }}
                  >
                    <span style={{ backgroundColor: 'lawngreen' }}>
                      {item.rating}{' '}
                      <StarIcon style={{ verticalAlign: 'top' }} />{' '}
                    </span>
                    <span className='pricestyle'>${item.price}</span>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <a href='#' className='btn btn-primary buttonstyle'
                    onClick={()=>{buyNow(item)}}>
                      BUY NOW
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
             <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
{/* Same as */}
<ToastContainer />
      </div>
    </div>
  )
}

export default Cart
