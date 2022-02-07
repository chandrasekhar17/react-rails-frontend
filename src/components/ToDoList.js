import React, { Component } from 'react';
import ToDoForm from './ToDoForm';
import ToDoItem from './ToDoItem';

const api_url = 'http://127.0.0.1:3001/api/v1/users'

class ToDoList extends Component {
  constructor(props) {
    super(props)  
    this.state = {
      names: [] 
    }
    this.updateToDoList = this.updateToDoList.bind(this);
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


updateToDoList(name)
{
  let _names = this.state.names
  _names.push(name)
  this.setState({
    names: _names
  })
  // document.findElementById("name_list").insertAdjacentHtml("Afterbegin", <ToDoItem key={name.id} name={name}/)
}
  
  render() {
    console.log(this.state.names)
    return(
     <div>
       <ToDoForm api_url={api_url} updateToDoList={this.updateToDoList}/>
       <hr />
       <ul id="name-list">
         {this.state.names.map((name) => (  
           <ToDoItem key={name.id} name={name} />
          //  <li key={name.id}>{name.name}</li>
         ))}
       </ul>

     </div>
    );
  }
}

export default ToDoList;
