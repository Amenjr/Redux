import { ADD, DELETE, DONE, EDIT, INPUT_VALUE } from "./type";


export const don=(id)=>{
    return {
        type:DONE,
        payload:id
    }

}
export const delet = (id)=>{
    return {
        type:DELETE,
        payload:id

    }
}

export const edit =(id,newtask)=>{
    return {
        type:EDIT,
        id:id,
        newtask:newtask
        

    }
}
export const add =(addlist)=>{
    return {
        type:ADD,
        payload:addlist
    }
}


