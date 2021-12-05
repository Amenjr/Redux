import React from 'react'
import{useSelector} from 'react-redux'
function Donee() {
    const todos = useSelector(state =>state.todos);
    return (
        <div>
           {
          todos.filter(el=>el.done===true).map(el=>
                <div style={{display:'flex',justifyContent:'space-between',marginTop:'20px'}}>
                    <ul style={{textDecoration:'null',listStyle:'none'}}>
                        
                        <li>{el.task}</li>
                        <li>{el.done}</li>
                    </ul>
                </div>)
            }
        </div>
    )
        }

export default Donee;
