import './App.css';
import { useState } from 'react';
import Childcom from './Childcom';

function App() {
  const[childname,setChildname] = useState('Default');
  const receivename = (name)=>{
    setChildname(name);
  }
  return (
    <div className="App">
      <h2>Hello React I'm Parent</h2>
      <Childcom setfun={receivename}/>
      <p>Parent:My child said:{childname}</p>
    </div>
  );
}

export default App;
