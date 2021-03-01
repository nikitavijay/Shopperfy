import React, { useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { Link } from 'react-router-dom'
export const CartContext = React.createContext()
export const CartProvider = CartContext.Provider
const Navbar = () => {
  
  const history = useHistory()
  const [search, setSearch] = useState(false)
  const [cartItems, setCartItems] = useState({})
   const [searchValue, setSearchValue] = useState(false)

  const searchFunction = e => {
    setSearch(!search)
    if (searchValue) {
      history.push('/search', { value: searchValue })
    }
  }
  return (
    <div>
          <CartContext.Provider value={"hi"}>

      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link to={'/'}>
          <img src='./download.png' alt='logo' style={{ height: '40px' }} />
          <h5
            className='navstyle'
            style={{
              display: 'inline-block',
              fontSize: '22px',
              margin: '0px 6px',
              color: 'darkgoldenrod'
            }}
          >
            {' '}
            Shop{' '}
          </h5>
        </Link>
        <div style={{ margin: 'auto' }}>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active navstyle'>
              <Link to={'/'} className='nav-link'>
                {' '}
                Home{' '}
              </Link>
            </li>
            <li className='nav-item active navstyle'>
              <Link to={'/women'} className='nav-link'>
                {' '}
                Women{' '}
              </Link>
            </li>
            <li className='nav-item active navstyle'>
              <Link to={'/men'} className='nav-link'>
                {' '}
                Men{' '}
              </Link>
            </li>
            <li className='nav-item active navstyle'>
              <Link to={'/sale'} className='nav-link'>
                {' '}
                Sale{' '}
              </Link>
            </li>
            <li className='nav-item active navstyle'>
              <Link to={'/contact'} className='nav-link'>
                {' '}
                Contact{' '}
              </Link>
            </li>
          </ul>
        </div>
        <form class='form-inline'>
          {search && (
            <input
              class='form-control mr-sm-2'
              type='search'
              onChange={e => setSearchValue(e.target.value)}
              placeholder='Search'
              aria-label='Search'
            />
          )}
          <span onClick={e => searchFunction(e.target.value)}>
            <SearchIcon />
          </span>
          <Link to={'/cart'}>
            <span style={{ margin: '0px 10px' }}>
              <ShoppingCartIcon />
            </span>
          </Link>
        </form>
      </nav>
      </CartContext.Provider>

    </div>
  )
}

export default Navbar
