import React, { useState, useEffect } from 'react'
import { salequery } from '../../queryConstants'
import StarIcon from '@material-ui/icons/Star'
import SearchIcon from '@material-ui/icons/Search'
import NavBar from '../navbar'
const Sale = () => {
  const query = salequery.replace('salequery', 'query')
  const [data, setData] = useState(null)
  const [origData, setOrigData] = useState(null)

  const [filterText, setFilterText] = useState('')
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
        setData(data.sale.items)
        setOrigData(data.sale.items)
        //       if(data){
        //       const ab = data.women.items.filter((item)=>item.name==="Blue bow sweater" )
        // console.log(ab)}
      })
  }, [])

  const filterFunction = value => {
    setFilterText(value)
    if (value == '') {
      setData(origData)
    } else {
      const ab = origData.filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
      setData(ab)
    }
  }

  const filterFunction2 = no => {
    switch (no) {
      case '1': {
        const dataArray = [...data]
        const ab = origData.filter(item => item.gender==='female')
        setData(ab)
        break
      }
      case '2': {
        const dataArray = [...data]
        const ab = origData.filter(item => item.gender==='male')
        setData(ab)
        break
      }
      case '3':{
          setData(origData)
      }
    }
  }
  const sortFunction = no => {
    switch (no) {
      case '1': {
        const dataArray = [...data]
        const ab = dataArray.sort(function (a, b) {
          return a.name < b.name ? -1 : 1
        })

        setData(ab)
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
  const ab = () => {}
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
          Sale Items
        </h5>
        <span>
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
          &nbsp;
          <select
            className='selectStyle'
            onClick={e => filterFunction2(e.target.value)}
          >
            <option selected disabled='true' className='option'>
              Filter By
            </option>
            <option className='option' value='1'>
              Women Clothing
            </option>
            <option className='option' value='2'>
              Men Clothing
            </option>
            <option className='option' value='3'>
              All
            </option>
          </select>
        </span>
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
                  <div>
                  <span className='origprice'>${item.originalprice}</span>

                  <span className='pricestyle'>${item.saleprice}</span>
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <a href='#' className='btn btn-primary buttonstyle'>
                    BUY NOW
                  </a>
                </div>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Sale
