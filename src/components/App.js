import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
class App extends React.Component {
state={images:[]};
    

   onSearchSubmit = async (term)=>{   
   // console.log(`vraceni prop iz search bar: ${term}`); 

   const response = await unsplash.get('/search/photos',{//request 
         params:{query: term},

         headers:{
          Authorization:'Client-ID 56da9bf1a74dc06f16f73ca999f251ea10c5b7931fddd3a3e535850ae183faff'
          }
    });

   
   this.setState({images: response.data.results});
}


// const response = await axios.get('https://api.unsplash.com/search/photos',{//request
      
// params:{query: term},
// headers:{
//       Authorization:'Client-ID 56da9bf1a74dc06f16f73ca999f251ea10c5b7931fddd3a3e535850ae183faff'
//          }
// });
// console.log(this);
// this.setState({images: response.data.results});
// }
// working with promises
// .then(response=>{
//    console.log(response.data.results)
// })

//onSubmit method in "<SearchBar onSubmit={}/>"
// as prop is regular prop name, not built in onSubmit atribute.


   render(){
       
    return(
    <div className="ui container" style={{marginTop: '10px'}}>

       <SearchBar onSubmit={this.onSearchSubmit}/>
       {/* Found: {this.state.images.length} images. */}
       <ImageList images={this.state.images}  />
    </div>
    );
   }
};


export default App;