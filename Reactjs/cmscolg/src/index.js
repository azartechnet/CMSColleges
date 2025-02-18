import React from 'react';
import ReactDOM from 'react-dom/client';

//Basic Rendering
/*const App=()=>{
  return(
    <h1>Welcome to the Application</h1>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//Dyanamic Rendering

/*const App=()=>{
  const username="mohamed";
  return(
    <div>
      <h1>Welcome to the Application</h1>
      <p>{username}</p>
      <h1>{new Date().toLocaleDateString()}</h1>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//React without JSX

/*const myelm1=React.createElement('h1',null,'Welcome')
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(myelm1)*/

//React with JSX

/*const myelm2=<h1>Welcome</h1>
const r2=ReactDOM.createRoot(document.getElementById('root'))
r2.render(myelm2);*/

//React List

/*const Myelem=()=>{
  return(
    <>      
    <h1>List Concepts</h1>
     <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
     </ul>
     <ol>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
     </ol>
    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Myelem/>)*/
//React Conditional Rendering
//if else Nested if else
/*const x=10
let text="";
if(x>10)
{
  text="Greater than 10"
}
else if(x==10)
{
  text="Equal to 10"
}
else
{
  text="Less than 10"
}
const Myelem=()=>{
  return(
    <>
       <h1>Conditional Rendering</h1>
       <p>{text}</p>
    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Myelem/>)*/

//React import css

/*import './index.css'

const App=()=>{
  return(
    <>
     <h1>Import CSS</h1>

    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//Function Components

/*function Sample()
{
  return(
    <>
      <form>
        <label>Enter your name:</label>
        <input type="text" name="name" />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//Class Components

/*class Sample extends React.Component
{
  render()
  {
    return(
      <>
         <h1>This is Class Component</h1>
      </>
    )
    }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/


//props using function to passing arguments

/*function Sample(props)
{
  return(
    <>
        <h1>Hello{props.name}</h1>
        <h2>{props.age}</h2>
    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample name="Rahul" age="20"/>)*/

//React Component in Component

/*function Component1()
{
  return(
    <>
      <h1>Hello</h1>
    </>
  )
}
function Component2()
{
  return(
    <>
      <h1>Component2</h1>
      <Component1/>
    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Component2/>)*/

//Constructor using super

/*class Sample extends React.Component
{
  constructor(props)
  { 
     super()

     this.state={name:"Rahul",age:20}
  }

  render()
  {
     return(
      <>
       <h1>Hello{this.state.name}</h1>
       <h2>{this.state.age}</h2>
      </>
     )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//React State

/*class Sample extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
      name:"Rahul",
      age:20
    }
  }
  render()
  {
    return(
      <>
         <h1>Hello {this.state.name}</h1>
         <h2>{this.state.age}</h2>
      </>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//Changing the state object

/*class Sample extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
      name:"Rahul",
      age:20

  }
  this.changeName=this.changeName.bind(this);
  this.changeAge=this.changeAge.bind(this);

}
 changeName()
 {
  this.setState({
    name:"Rahul Kumar"
    })
    }
    changeAge()
    {
      this.setState({
        age:21
        })
        }
        render()
        {
          return(
            <>
             <h1>Hello {this.state.name}</h1>
             <h2>{this.state.age}</h2>
             <button onClick={this.changeName}>Change Name</button>
             <button onClick={this.changeAge}>Change Age</button>
            </>
          )
        }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//React Event

/*function Football()
{
  const shoot=()=>{
     alert("Goal Scored")
  }
  return(
    <>
      <h1>Football</h1>
      <button onClick={shoot}>Shoot</button>
    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

//React event argument passing

/*function Football()
{
   const shoot=(e)=>{
    alert("Goal Scored"+e)
   }
   return(
    <>
      <h1>Football</h1>
      <button onClick={(e)=>shoot("100")}>Shoot</button>
    </>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

//Conditional Rendering

/*function MissedGoal()
{
   return<h1>Missed</h1>
}
function MadeGoal()
{
  return<h1>Goal Made</h1>
}
function Football(props)
{
    const isGoal=props.isGoal;
    if(isGoal)
    {
      return<MadeGoal/>
    }
    else
    {
      return<MissedGoal/>
    }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football isGoal={Math.random()>0.5}/>)*/

//React List using Map

/*function Car(props)
{
  return<li>I am {props.b1}</li>
}
function Garage()
{
  const cars=["BMW","Audi","Toyota"];
  return(
    <>
     <h1>Garage</h1>
     <ul>
      {cars.map((car)=><Car b1={car}/>)}
     </ul>
    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Garage/>)*/
//React Keys
/*function Car(props)
{
  return<li>{props.id}{props.b1}</li>
}
function Garage()
{
   const cars=[
    {id:1,b1:"BMW"},
    {id:2,b1:"Audi"},
    {id:3,b1:"Toyota"}
    ];
    return(
      <>
       <h1>Garage</h1>
       <ul>
        {cars.map((car)=><Car id={car.id} b1={car.b1}/>)}
       </ul>
      </>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Garage/>)*/

//React getDerviedStateFromProps

/*class Header extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={count:0}
  }
  static getDerivedStateFromProps(props,state)
  {
    console.log("getDerivedStateFromProps")
    return{count:props.c1}
  }
  render()
  {
     return(
      <>
       <h1>Header</h1>
       <p>Count:{this.state.count}</p>
      </>
     )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Header c1={10}/>)*/

//ComponentDidMount

/*class Header extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={favcolor:"red"}
  }
  componentDidMount()
  {
     console.log("componentDidMount")
     setTimeout(()=>{
      this.setState({favcolor:"blue"})
     },3000)
  }
  render()
  {
    return(
      <>
      <h1>Header</h1>
      <p>My fav color is {this.state.favcolor}</p>

      </>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Header/>)*/

//shouldComponentUpdate

/*class Header extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={favcolor:"red"}
  }
  shouldComponentUpdate(nextProps,nextState)
  {
    console.log("shouldComponentUpdate")
  }
  changeColor=()=>{
    this.setState({favcolor:"blue"})
  }
  render()
  {
    return(
      <>
           <h1>Header</h1>
           <p>My fav color is {this.state.favcolor}</p>
      </>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Header/>)*/

//React Hooks

import { useState,useEffect,useRef } from 'react';

/*function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Rahul");
  return(
    <>
        <h1>Count : {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <h1>My Name is {name}</h1>
        <button onClick={()=>setName("Rahul Kumar")}>Change Name</button>
    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Counter/>)*/

//useEffect

/*function ClickCounter()
{
  const [count, setCount] = useState(0);
  useEffect(()=>{
    console.log("useEffect")
    },[count])
    return(
      <>
       <h1>Count : {count}</h1>
       <button onClick={()=>setCount(count+1)}>Increment</button>
      </>
      )
  }
 const r1=ReactDOM.createRoot(document.getElementById('root'))
 r1.render(<ClickCounter/>)*/

 //React using without useContext

 /*function Component1()
 {
   const [user,setUser]=useState("mohamed");
   return(
    <>
        <h1>UserName is::{user}</h1>
        <button onClick={()=>setUser("Rahul")}>Change User</button>
        <Component2 user={user}/>
    </>
   )
 }
 function Component2(props)
 {
  return(
    <>
       <h1>UserName is::{props.user}</h1>
    </>
  )
 }
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<Component1/>)*/

  //React using useContext

  /*import { useContext,createContext } from 'react';

  const UserContext=createContext();

  function Component1()
  {
     const [user,setUser]=useState("mohamed");
     return(
      <UserContext.Provider value={user}>

        <h1>Component1 user name is::{user}</h1>
        <Component2/>
      </UserContext.Provider>
     )
  }
  function Component2()
  {
    const user=useContext(UserContext);
    return(
      <>
          <h1>Component2 user name is::{user}</h1>

      </>
    )
  }
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<Component1/>)*/

  //React useRef
  
  /*function FocusInput()
  {
    const inputRef=useRef(null);
    const handleClick=()=>{
      inputRef.current.focus();
      }
      return(
        <>
            <input type="text" ref={inputRef}/>
            <button onClick={handleClick}>Focus</button>
        </>
      )
  }
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<FocusInput/>)*/

  //Another Example of useState

  /*function UserProfile()
  {
    const [user,setUser]=useState({name:"mohamed",age:20,email:"mohamed@gmail.com"})
    const updateEmail=()=>{
      setUser({...user,email:"mohamed123@gmail.com"})
    }
    return(
      <>
          <h1>name:{user.name}</h1>
          <h1>age:{user.age}</h1>
          <h1>email:{user.email}</h1>
          <button onClick={updateEmail}>update email</button>
      </>
    )
  }
  const r1=ReactDOM.createRoot(document.getElementById('root')) 
  r1.render(<UserProfile/>)*/

  //useState with Array

  /*function TodoList()
  {
     const [todos,setTodos]=useState(["BuyMilk","BuyEggs","BuyBread"])
     const addTodo=()=>{
      setTodos([...todos,"BuyButter"])
     }
     return(
      <>
          <h1>Todo List</h1>
          <ul>
            {todos.map((todo,index)=>
            <li>{index}{todo}</li>
            )}
          </ul>
          <button onClick={addTodo}>Add Todo</button>
      </>
     )
  }
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<TodoList/>)*/

  //React REST API post using of useState and useEffects

  /*function App()
  {
    const [user,setUser]=useState([]);

    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>response.json())
      .then(data=>setUser(data))
    })
    return(
      <>
      <h1>Users</h1>
       <table>
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>WebSite</th>
          <th>Action</th>
        </thead>
        <tbody>
          {user.map((user,index)=>
          <tr key={index}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.website}</td>
            <td><button>View</button></td>
          </tr>
          )}
        </tbody>
       </table>
      </>
      )
  }
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<App/>)*/

  //React using userId

  function App(){
    const [user,setUser]=useState([])
    const [id,setId]=useState(1);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response=>response.json())
        .then(data=>setUser(data))
    })
    return(
         <div>
          <h1>User</h1>
          <h2>{user.name}</h2>
          <h3>{user.email}</h3>
          <h4>{user.website}</h4>
          <button onClick={()=>setId(id+1)}>Next</button>
         </div>
    )
  }
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<App/>)