import axios from 'axios';
// const access_key='56da9bf1a74dc06f16f73ca999f251ea10c5b7931fddd3a3e535850ae183faff';
      //  const secret_key='674119aff184221ba39611d727baa1bda61e1020b79b35d213a54ccbe51d72ed';
export default axios.create({
    baseURL:'https://api.unsplash.com' ,
    headers:{
        Authorization:'Client-ID 56da9bf1a74dc06f16f73ca999f251ea10c5b7931fddd3a3e535850ae183faff'
           }
});



//https://api.unsplash.com/
   //GET search/photos
   //2 params - URL & object
   //Object - Using headers for authorization -Authorization: `Client-ID YOUR_ACCESS_KEY`