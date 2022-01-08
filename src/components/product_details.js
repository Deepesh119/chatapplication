import React,{useEffect,useState} from 'react'
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FetchApi } from '../api/api';
import { useParams } from 'react-router';

function ProductDetails() {
    const [details,setdetails]= useState({})
    const {productId} = useParams();

   const GetData = async()=>{
      console.log("productId",productId);
       const response = await FetchApi(productId);
       setdetails(response.data)
       console.log("--details", response);
       ///  console.log(list)
    }
    useEffect(()=>{
         GetData();   
    },[])
    
    return (
       <>
               
     <div className='montyproduct'>
        {  details &&  
             (
                <>
              <div className='FlexCard'>
                <Card sx={{marginLeft:50,marginTop:5,border:2,minWidth:500  ,minHeight:480,backgroundColor:"gray",color:"black"}}>
                 <CardContent>
                   <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                       {details.id} <h4>Brand:</h4> {details.name} <br/><br/>
                    </Typography>
                    <Typography variant="h5" component="div">
                    <h4>Model:</h4> {details.model}<br/> 
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <h4>Price:</h4> {details.price} <br/> 
                     </Typography>
                    <Typography variant="body2">
                     {details.categoryId} <br/> <br/> <br/> <br/>
                    </Typography>
                    <Typography variant="body2" >
                    <h5>Description:{details.description}</h5>
                    <br/>
                    </Typography>
                  </CardContent>
               
               </Card>
                </div>
               </>
            )
        }
     </div>
       </> 
     
    );
}

export default ProductDetails
