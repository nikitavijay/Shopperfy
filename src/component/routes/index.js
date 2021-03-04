import React,{useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Women from '../women'
import Men from '../men'
import Contact from '../contact'
import Home from '../home'
import Cart from '../cart'
import Sale from '../sale'
import Search from '../search'

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/women' component={Women} />
            <Route exact path='/men' component={Men} />
            <Route exact path='/sale' component={Sale} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/search' component={Search} />
        </Switch>
      </Router>
    </div>
  )
}

export default Routes
