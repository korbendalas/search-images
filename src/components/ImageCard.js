import React from 'react';

class ImageCard extends React.Component{

constructor(props){
    super(props);

    this.state={ spans: 0};

//to acces DOM element from React
    this.imageRef = React.createRef();
}

//componentDidMount gets invoked after the component is rendered 
componentDidMount(){
//console.log(this.imageRef);
this.imageRef.current.addEventListener('load',this.setSpans);

}

//sets the amount of rows for every image to span
setSpans=()=>{
    //takes the current height of image
const height= this.imageRef.current.clientHeight;

//const spans = Math.ceil(height / 10);
const spans = Math.ceil(height / 10);
this.setState({spans})
}


render(){
    
    const {description, urls} = this.props.image;
    return(
    
    <div style={{gridRowEnd:`span ${this.state.spans}`}}> 

        <img 
        ref={this.imageRef}
        alt={description}
        src={urls.regular}
/>
    </div>);
}

}

export default ImageCard;