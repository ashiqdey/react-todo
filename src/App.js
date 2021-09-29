import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import {Todos} from './components/todos'
import {Footer} from './components/footer'
import React, { useState } from 'react'

function App() {


  let [todos,setTodo] = useState([
    {
      id:1,
      title:"learn python"
    },
    {
      id:2,
      title:"refactor old codes"
    },
    {
      id:3,
      title:"Server maintenance"
    }
  ])


  const onDelete = (id) =>{
    console.log("delete"+id);
    setTodo(todos.filter(e => e.id != id))
  }

  return (
    <>
      <Header title="My todo app" />
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer copyright={2021} company="my company" />
    </>
  );
}

export default App;
