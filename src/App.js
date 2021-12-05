import {Button} from 'react-bootstrap';
import { useState } from 'react';
import Donee from './Component/done';
import Undone from './Component/undone';
import './App.css';
import Todolist from './Component/todolist';

function App() {
  const [show,setshow]=useState(false)
  const [showundone,setshowundone]=useState(false)
  const [showDone,setshowDone]=useState(false)
  
  
  
  
  return (
    <div className="App" style={{display:'flex',justifyContent:'space-around',marginTop:'50px'}}>
<Button variant="warning" onClick={()=>setshow(!show) }>All</Button>
{show && <Todolist/>}
<Button variant="danger" onClick={()=>setshowundone(!showundone)}>UnDone</Button>
{showundone && <Undone/>}
<Button variant="success" onClick={()=>setshowDone(!showDone)}>Done</Button>
{showDone && <Donee/>}
    </div>
  );
}

export default App;
