import React from 'react';
import './App.css';
import ListItems from "./ListItems.js"
import {library} from "@fortawesome/fontawesome-svg-core"
import {faTrash} from "@fortawesome/free-solid-svg-icons"

library.add(faTrash)

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
    this.handleInput= this.handleInput.bind(this);
    this.AddItem= this.AddItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  handleInput(event){
    this.setState({
      currentItem:{
        text: event.target.value,
        key: Date.now()
      }
    })

  }
  AddItem(event){
    event.preventDefault();
    const newItem=this.state.currentItem;
    console.log(newItem)
    let newItems
    if(newItem.text !==""){
      newItems= [...this.state.items, newItem];
    }
    //const newItems=[]
    //if(newItem.text !==""){
    //  newItems.push(newItem) ;
    //}
    this.setState({
      items: newItems,
      currentItem: {
        text: "",
        key: ""
      }
    })
  }
  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })

  }
  setUpdate(text, key){
    console.log("items: " + this.state.items);
    const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
        console.log(item.key +"    "+key)
        item.text= text;
      }
    })
    this.setState({
      items: items
    })
  }
  render(){
    return (
      <div className="App">
        <header>
        <form className="todo-form" onSubmit={this.AddItem}>
        <input type="text" 
        placeholder="Enter your task"
        value={this.state.currentItem.text}
        onChange={this.handleInput}>

        </input>
        <button type="submit">Add</button>

        </form>
        
        <p>{this.state.items.text}</p>
      </header>
      <ListItems items={this.state.items} deleteItem={this.deleteItem} 
          setUpdate={this.setUpdate}>

      </ListItems>
      </div>
    );
  }

  
}

export default App;
