import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      loading:false,
      character:{}
    }
  }
  componentDidMount(){
    this.setState({loading:true})
    fetch("https://swapi.co/api/people/4")
           .then(response => response.json())
           .then(data => {
            this.setState({
             loading:false,
              character: data
            })

            
           })
           

  }
  render(){
    
    
    const text1 =  this.state.character.name
    const text2 =  this.state.character.height
    const text3 =  this.state.character.eye_color
    return (
      <div className="Star-Wars-Character">
      <h1>Star Wars Characters</h1>
        <ul>
          
      
       <li><strong>Star Wars Character:</strong> {text1}</li>
       
      
      
        <li><strong>Height:</strong>{text2}</li>
        <li><strong>Eye Color:</strong>{text3}</li>
      
      </ul>
        </div>

    )
  }
}

export default App;

//https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
//https://swapi.co/
