import React, {useState} from 'react';
import {Message} from './message.js'
import './App.css';

function App() {
  let [count , setcount] = useState(1);
  let [isMorning , setMorning] = useState(false);
  return (
    <div className = {`box ${isMorning ? 'daylight':''}`} >
   <Message counter={count}/>
  <h1>Have a nice = {isMorning ? "Morning" : "Night"}</h1>
    <button onClick={
      ()=>setcount(count + 1)
      }>Update Counter</button>

    <button onClick={()=>setMorning(!isMorning)}> Update Day </button>
    </div>
  );
}

export default App;
