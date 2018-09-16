import React, { Component } from 'react';
import './App.css';
import './AppCustomStyle.css';
import Table from './Components/Table';
import Form from './Components/Form';


class App extends Component {
  state ={
    items : []
  }
  handleSubmit = (newItem)=>{
    this.setState({
      items : [...this.state.items,newItem]
    });
  }
  render() {
    const items = this.state.items;
    const removeItem = (index)=>{
        this.setState(
          {
            items : items.filter((value,i)=>{
              return i !== index;
            })
          });
    }
    
    return (
      <div className="App">
        <h1>Welcome To My TODO List App</h1>
        <Table 
               TableContent = {this.state.items}
               removeItemAtt = {removeItem}/>
        <Form 
               handleSubmit = {this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
