import React, {useEffect, useState} from 'react'
import { FetchApi} from '../api/api';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


export default function ProductList(){
    const [list,setList]= useState([])

   const GetData = async()=>{
       const response = await FetchApi('https://aveosoft-react-assignment.herokuapp.com/products')
       setList(response.data)
       console.log(list)
    }
    useEffect(()=>{
         GetData();
    },[list])
    
    return (
       <>
               
     <div className='montyproduct'>
        {  list && list.map((val)=>{
           return(
                <>
              <div className='FlexCard'>
                <Card sx={{marginTop:5,border:2,maxWidth: 400 ,maxHeight:400,backgroundColor:"gray",color:"black"}}>
                 <CardContent>
                   <Link to={`/details/${val.id}`}>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {val.id} <h6>Brand:</h6> {val.name}
                        </Typography>
                    </Link>
                    <Typography variant="h5" component="div">
                    <h6>Model:</h6> {val.model}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <h6>Price:</h6> {val.price}
                     </Typography>
                    <Typography variant="body2">
                     {val.categoryId}
                    </Typography>
                    
                  </CardContent>
                
               </Card>
                </div>
               </>
            )})}
     </div>
       </> 
     
    );
}
