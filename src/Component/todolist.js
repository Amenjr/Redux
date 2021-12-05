import React from 'react'
import{useSelector,useDispatch} from 'react-redux'
import{ButtonGroup,Button} from 'react-bootstrap'
import Mod from './Add';
import {delet,don} from '../redux/action'

import ModE from './Edit';


function Todolist() {
    const todos = useSelector(state =>state.todos);
    const dispatch = useDispatch()
    
    
    
    
    return (
        <div>
            {todos.map(el=>
                <div style={{display:'flex',justifyContent:'space-between',marginTop:'20px'}} key={el.id}>
                    <ul style={{textDecoration:'null',listStyle:'none',textDecoration: el.done? "line-through" : null}}>
                        
                        <li>{el.task}</li>
                        <li>{el.done}</li>
                    </ul>
                    
                    <ButtonGroup aria-label="Basic example" style={{height:'40px'}}>
                        <Button variant="secondary" style={{backgroundColor:'green'}} onClick={()=>dispatch(don (el.id))}>done</Button>
                        <Button variant="secondary"style={{backgroundColor:'red'}} onClick={()=>dispatch(delet(el.id))}>delete</Button>
                        
                        <ModE el={el}/>
                        
                    </ButtonGroup>
                    
                   
                    
                    
                </div>
            )
                }
            <Mod/>
            
            </div>   
    )
}

export default Todolist;
