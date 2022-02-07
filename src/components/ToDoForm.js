import React, { Component } from 'react';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
export class ToDoForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         api_url: props.api_url,
         name: "",
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleNameChange = this.handleNameChange.bind(this);
    }
    handleSubmit(event)
    {
        event.preventDefault();
        this.formSubmit(event.target);
    }
    
    async formSubmit(formData)
    {
        var data = new FormData(formData);
        await fetch(this.state.api_url,{
            method: "POST",
            mode: "cors",
            body: data
        }).then(response => response.json())
        .then(response => this.props.updateToDoList(response))
    }


    handleNameChange(event)
    {
        this.setState({
            name: event.target.value
        })

    }
  render() {
    return (
        <div>
            <h2>Add Employee</h2>
            <br></br>
            <form onSubmit={this.handleSubmit} id=" todo_form" autoComplete="off" align="center">
                <TextField 
                id="name_input"
                label=" Employee Name "
                variant="outlined"
                type="text"
                name="user[name]"
                onChange={this.handleNameChange}
                />
                <br></br>
                <br></br>
                <Button variant="contained" color="primary" type="submit"> Add Employee</Button>

            </form>

        </div>
    );
  }
}

export default ToDoForm;
