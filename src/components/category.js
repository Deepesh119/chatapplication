import React, { useEffect, useState } from 'react'
import { fetchCategories } from '../api/api';

export default function Category() {

    const [categories, setcategories] = useState([]);

    const fetchCategory = async ()=>{
        const response = await fetchCategories();
        setcategories(response.data)
    }

    useEffect(()=>{
        fetchCategory()
    },[]);

    return (
        <div className="dropdown">
         <h3>Product Category</h3><p id='Projectanimation'><b>Click on the brand mention on card to get details</b></p>
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
             Select
          </button>
           <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
           {
               categories.map((item)=>(<li key={item.id}><a className="dropdown-item" href="#">{item.name}</a></li>))
           }
           </ul>
         </div>
    )
}
