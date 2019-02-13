import React from 'react';


class SearchBar extends React.Component{
// onInputChange=(event)=>{

    
// }

state={term:''};

//to prevent form to submit data on ENTER key pressed.
onFormSubmit=(event)=>{
    event.preventDefault();
    //console.log(this.state.term);

    this.props.onSubmit(this.state.term);//invoking callback so App comp has access
}

    render(){
//console.log(this.state.term);
        return(

            <div className="ui segment">
               <form onSubmit={this.onFormSubmit} className="ui form">
               <div className="field"> 
               <label>Image Search</label>
                 <input value={this.state.term} type="text" onChange={(e)=>this.setState({term:e.target.value})}/>
                </div>
                 
                   </form>
            </div>
        );
    }
}
export default SearchBar;