import React, { useState } from 'react';
import List from "./components/List";

const App = () => {
  const [input, setInput] = useState("")
  return( 
    <main>
    <h1 className="title">CRUD Operations</h1>
    <div className="input_holder">
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
      <button type="submit">Add Task</button>

    </div>
    <ul>
      <List task="something"/>
    </ul>
  </main>
  )
}

export default App