import React, { Component } from 'react';

const api_url = 'http://127.0.0.1:3001/api/v1/users'

class DisplayList extends Component {
  constructor(props) {
    super(props)  
    this.state = {
      names: [] 
    }
  }
  componentDidMount() {
    this.getTasks();
  }

  getTasks() {
    console.log(this.state.names)
    fetch(api_url)
       .then(response => response.json())
       .then(response_names => {
           this.setState({
          names: response_names
      })
    });
  }
  
  render() {
    return(
     <div>
       <h1>Employee Names </h1>
       <hr />
       <ul id="name-list">
         {this.state.names.map((name) => (  
           <li key={name.id}>{name.name}</li>
         ))}
       </ul>

     </div>
    );
  }
}

export default DisplayList;
