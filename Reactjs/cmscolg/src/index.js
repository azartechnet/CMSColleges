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

function MissedGoal()
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
r1.render(<Football isGoal={Math.random()>0.5}/>)