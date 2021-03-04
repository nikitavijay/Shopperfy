import logo from './logo.svg';
import './App.css';
import React from'react'
import Routes from './component/routes'
import {Provider} from 'react-redux'
import {store} from '../src/component/redux/store'
function App() {
  return (
    <div>
      <Provider store={store}>
      <Routes/>
      </Provider>
    </div>
  );
}

export default App;
