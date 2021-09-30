import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import {Todos} from './components/todos'
import {AddTodo} from './components/addTodo'
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

  const add_new_todo = (title) => {
    console.log("form submited",title);

    setTodo([...todos, {id:(todos[todos.length-1].id + 1),title}])

  }

  return (
    <>
      <Header title="My todo app" />
      <AddTodo add_new_todo={add_new_todo}></AddTodo>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer copyright={2021} company="my company" />
    </>
  );
}

export default App;
