import React from 'react'
import "../App.css";
import { TiGift } from "react-icons/ti";
import { BiMobile } from "react-icons/bi"
import { FaShopify } from "react-icons/fa"
import { BsFillLaptopFill } from "react-icons/bs"

const Navbartwo = () => {
    return (
        <>
            <div className='cssgrid'>
             
             <div><h6>Top Offers</h6>
                  <TiGift/>
             </div>
             <div><h6>Grocery</h6>
             
             </div> 
             <div><h6>Mobile</h6>
               <BiMobile/>            
             </div>
             <div><h6>Fashion</h6>
             <FaShopify/>
             </div>
             <div id="appliancesdevice"><h6>Electronic</h6>
             <BsFillLaptopFill/>
             </div>
             <div><h6>Home</h6>
             
             </div>
             <div id="appliances"><h6>Appliance</h6></div>
             <div><h6>Travel</h6>
             
             </div>
             <div><h6>Beauty,Toy and More</h6></div>
             
            </div>
        </>
        
    )
}

export default Navbartwo
