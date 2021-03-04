import React, { useState, useEffect } from 'react';
import { query } from '../../queryConstants';
import StarIcon from '@material-ui/icons/Star';
import './featured.css'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from 'react-redux'

const Featured = () => {
  const [data, setData] = useState(null);
  const [origData, setOrigData] = useState(null);
const dispatch=useDispatch()
  const [filterText, setFilterText] = useState('')
  const addFunction = item => {
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
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer Cg2U1TaeZltz_WM5ypX8dsuSYe9bY9T6PPIp0LvJH8Y",
        },
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }
        setData(data.women.items)
        setOrigData(data.women.items)
        //       if(data){
        //       const ab = data.women.items.filter((item)=>item.name==="Blue bow sweater" )
        // console.log(ab)}
      });
  }, []);
    return (
        <div style={{backgroundColor:"cadetblue"}}>
        <div className="shop">
            Featured Products </div>
            {
        data && data.map(item => {
          return <div className="card cardstyle hover-shadow" style={{ width: "275px" ,margin:"0px 30px"}}>
            {data && <img className="card-img-top cardimage hover-shadow" src={item.image.url} alt="Card image cap" />}
            <div className="card-body">
              <div style={{ textAlign: "center" }}>
                <span className="cardtitle">{item.name}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", margin: "10px 0px" }}>
                <span style={{ backgroundColor: "lawngreen" }}>{item.rating} <StarIcon style={{ verticalAlign: "top" }} /> </span>
                <span className="pricestyle">${item.price}</span>
              </div>
              <div style={{ textAlign: "center" }}>
                <a href="#" className="btn btn-primary buttonstyle" onClick={()=>{addFunction(item)}}>ADD TO CART</a>
              </div>
            </div>
          </div>
        })
      }
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
    );
};

export default Featured;