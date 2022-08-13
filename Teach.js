import React, { Component } from "react";
import Cardlist from './Cardlist';
import Scroll from "./Scroll";
import Searchbox from './Searchbox';





class Teach extends Component {
    constructor() {
        super()
        this.state={
            Say:[],
            searchfield:''
        }
    }
    componentDidMount(){
      fetch("https://jsonplaceholder.typicode.com/users").then(response=>{
       return  response.json();
      })
      .then(users=>{
        this.setState({Say:users})
      });
    }


    onSearchChange=(event) => {
        this.setState({searchfield: event.target.value}) 
    }
   
    render() {
        const filter=this.state.Say.filter(Says=>{
            return Says.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
       
        return !this.state.Say.length ?
        <h1>LOADING</h1>:
        (
            <div className="tc">
            <h1>ROBOFRIEND</h1>
            <Searchbox searchChange={this.onSearchChange}/>
            <Scroll>
             <Cardlist Say={filter}  />
             </Scroll>
             </div>  

        );


    }
}

export default Teach;