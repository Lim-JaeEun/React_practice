import React from "react"
import Box from './testBox';
function todoBoardWrap(props){
    return(
        <>
            <h1 className='tit'>TO DO !</h1>
            <div> 
                {props.todoList.map((item)=>{
                    return <Box item={item.test} edit_chk={item.edit_chk} eSave={props.editSaveBtn} chkBox = {item.isDone} id={item.id} ondeletebtn={props.delbtn} onUpdate = {props.updatechk} onEditBtn = {props.editBtn} />
                    
                })}
            </div>
        </>

    )

}
export default todoBoardWrap