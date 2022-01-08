import React from 'react'
import "../App.css"

const Body = () => {
   
    

  return (
        <>
     <div className='bodyofapp'>
        <div className='bodydropdown'>
         
         <div className="dropdown">
         <h3>Product Category</h3>
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
             Select
          </button>
           <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
           <li><a className="dropdown-item" href="#">Laptop</a></li>
           <li><a className="dropdown-item" href="#">Phones</a></li>
           </ul>
         </div>
        </div>
       
        </div>
      
        </>
        
    )
}

export default Body
