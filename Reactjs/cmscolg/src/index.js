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

const Myelem=()=>{
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
r1.render(<Myelem/>)