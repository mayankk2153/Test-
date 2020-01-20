import React, { useState } from 'react';
import './App.css';

function App() {
  var [count,onCount]=useState({name:""});
  function increment(event){
    console.log(count);
    onCount({...count,[event.target.name]:event.target.value});
  }
    return (
      <div>
        <input type='text' onChange={increment} name='name' value={count.name} placeholder='Enter the text'></input>
        <h1>{count.name}</h1>
      </div>
    );
}

export default App;
