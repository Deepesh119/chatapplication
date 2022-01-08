import React from 'react';
import {useState,useEffect} from 'react';
import { FetchApi,FetchData } from '../api/api';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Bodytwo = () => {
    const [list,setList]= useState([])

   const GetData = async()=>{
       const response = await FetchApi('https://aveosoft-react-assignment.herokuapp.com/products')
       setList(response.data)
       console.log(list)
    }
    useEffect(()=>{
         GetData();
    },[])
    
    return (
       <>
               
     <div className='montyproduct'>
        {  list && list.map((val)=>{
           return(
                <>
              <div className='FlexCard'>
                <Card sx={{marginTop:5,border:2,maxWidth: 400 ,maxHeight:600,backgroundColor:"gray",color:"black"}}>
                 <CardContent>
                   <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                       {val.id} <h6>Brand:</h6> {val.name}
                    </Typography>
                    <Typography variant="h5" component="div">
                    <h6>Model:</h6> {val.model}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <h6>Price:</h6> {val.price}
                     </Typography>
                    <Typography variant="body2">
                     {val.categoryId}
                    </Typography>
                    <Typography variant="body2" >
                    <h6>Description:</h6>{val.description}
                    <br/>
                    </Typography>
                  </CardContent>
                <CardActions className="action">
                <Button className='Buttonaction'>Buy Now</Button>
                <Button className='Buttonaction'>Details</Button>

                </CardActions>
               </Card>
                </div>
               </>
            )})}
     </div>
       </> 
     
    )
}

export default Bodytwo
