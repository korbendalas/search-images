import React from 'react';

const ImageList=(props)=>{
 console.log(props.images);

//array                        a moze i {description, id, urls} - destructuring
const images = props.images.map((item)=>{

    return <img alt={item.description} key={item.id} src={item.urls.regular}/>
})
    return (

    <div>{images} </div>
    
    );
};

export default ImageList;