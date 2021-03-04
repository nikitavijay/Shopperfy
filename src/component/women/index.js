import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { query } from '../../queryConstants'
import './womenstyle.css'
import StarIcon from '@material-ui/icons/Star'
import SearchIcon from '@material-ui/icons/Search'
import NavBar from '../navbar'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const Women = () => {
  const [data, setData] = useState(null)
  const [origData, setOrigData] = useState(null)
  const [filterText, setFilterText] = useState('')
  const dispatch = useDispatch()
  const addItem = item => {
    var action = {
      type: 'ADDITEM',
      payload: item
    }
    dispatch(action)
    toast.success('Added to Cart Successfully', {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }
  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/711srt0otdpx/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer Cg2U1TaeZltz_WM5ypX8dsuSYe9bY9T6PPIp0LvJH8Y'
        },
        body: JSON.stringify({ query })
      })
      .then(response => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors)
        }
        setData(data.women.items)
        setOrigData(data.women.items)
      })
  }, [])

  const filterFunction = value => {
    setFilterText(value)
    if (value == '') {
      setData(origData)
    } else {
      const ab = origData.filter(item =>
        item.name.toLowerCase().includes(value.toLowerCase())
      )
      setData([...ab])
    }
  }

  const sortFunction = no => {
    switch (no) {
      case '1': {
        const dataArray = [...data]
        const ab = data.sort(function (a, b) {
          return a.name < b.name ? -1 : 1
        })
        setData([...ab])
        break
      }
      case '2': {
        const dataArray = [...data]
        const ab = dataArray.sort(function (a, b) {
          return a.name > b.name ? -1 : 1
        })
        setData(ab)
        break
      }
      case '4': {
        const dataArray = [...data]
        const ab = dataArray.sort(function (a, b) {
          return a.price > b.price ? -1 : 1
        })
        setData(ab)
        break
      }
      case '3': {
        const dataArray = [...data]
        const ab = dataArray.sort(function (a, b) {
          return a.price - b.price
        })
        setData(ab)
        break
      }
    }
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
          Women Clothing
        </h5>
        <select
          className='selectStyle'
          onClick={e => sortFunction(e.target.value)}
        >
          <option selected disabled='true' className='option'>
            Sort By
          </option>
          <option className='option' value='1'>
            Name : A to Z
          </option>
          <option className='option' value='2'>
            Name : Z to A
          </option>
          <option className='option' value='3'>
            Price : Low to High
          </option>
          <option className='option' value='4'>
            Price : High to Low
          </option>
        </select>
      </div>
      <div style={{ textAlign: 'right' }}>
        <input
          type='search'
          placeholder='What are you looking for'
          style={{ width: '215px' }}
          value={filterText}
          onChange={e => filterFunction(e.target.value)}
        />
        <SearchIcon
          onClick={() => filterFunction(filterText)}
          className='searchIcon'
        />
      </div>
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
                    {item.rating} <StarIcon style={{ verticalAlign: 'top' }} />{' '}
                  </span>
                  <span className='pricestyle'>${item.price}</span>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <a
                    href='#'
                    className='btn btn-primary buttonstyle'
                    onClick={() => addItem(item)}
                  >
                    ADD TO CART
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
  )
}

export default Women
