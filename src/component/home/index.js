import React from 'react';
import Navbar from '../navbar'
import TopBar from '../topbar'
import MidBar from '../midbar'
import BottomBar from '../bottombar'
import Featured from '../featured'
import About from '../about'
import Contact from '../contact'


const Home = () => {
    return (
        <div>
            <Navbar/>
            <TopBar/>
            <MidBar/>
            <Featured/>
            <About/>
            <Contact isHome={"yes"}/>
            <BottomBar/>
        </div>
    );
};

export default Home;