import axios from 'axios';

export const FetchApi=async(productId)=>{
 const response = await axios.get(`https://aveosoft-react-assignment.herokuapp.com/products/${productId}`);
 return response;
 }

export const fetchCategories=async()=>{
    const response = await axios.get(`https://aveosoft-react-assignment.herokuapp.com/categories`);
    return response;
}