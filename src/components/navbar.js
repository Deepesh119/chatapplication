import React from 'react'
import "../App.css";
import { useState } from 'react';

const Navbar = () => {
  const[search,setSearch]= useState(" ")

 

    return (
    <>    
  <div className='Montyone'>
      <h3 className='heading'>Flipkart</h3>
      <input placeholder="Search" id="MontyTwo" value={search} onChange={(event)=>setSearch(event.target.value)}/>
      <button id="searchkro">Search</button>
      <button className='hellobutton'>Login</button>
      <h5 className='marginmore'>More</h5>
  </div>
    </>
    )
}

export default Navbar
