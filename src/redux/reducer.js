

import { ADD, DELETE, DONE, EDIT} from './type'
const inistate={
    todos:[{id:'0',task:'eat',done:false},
    {id:'1',task:'sleep',done:false},
    {id:'2',task:'play',done:false},
    {id:'3',task:'read',done:false},
    ],
    
   

}

const rootReducer=(state=inistate,action)=>{


    switch (action.type) {
        case ADD:
            return(
                {todos:[...state.todos,action.payload]}
            )
        
        case DELETE:
            return(
                {todos:state.todos.filter(el=>el.id !== action.payload)}
            )
        case DONE:
            return(
                {todos:state.todos.map(el=> el.id === action.payload ? {...el,done:!el.done}:el)}
            )

       
        case EDIT:
            return(
                {todos:state.todos.map( el=> el.id === action.id ? {...el,task:action.newtask}:el)}
            )
        default: return state;
    }
  
  }
  export default rootReducer;