import React from 'react';
import './style.css';
import Button from '@material-ui/core/Button';
const TopBar = () => {
    return (
        <div>
            <div style={{"height":"450px" }}>
                {/* <div className="heading">
                    For your new perfect STYLE!!
                </div>
                <Button className="shopbutton" variant="contained" >Shop Now</Button> */}
                <img src="./capture6.png" alt="logo" style={{ height: "450px",width:"100%"}}/>
                {/* <div className="heading">
                    For your new perfect STYLE!!
                </div> */}
                <a href="#midBar" style={{textDecoration:"none"}}><Button className="shopbutton" variant="contained" >Shop Now</Button></a>
            </div>
        </div>
    );
};

export default TopBar;