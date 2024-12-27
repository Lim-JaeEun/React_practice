import React, {useState} from "react";

function Box(props) {
  const onChangeCheckbox = () => {
    props.onUpdate(props.id);
  };
  const onDeleteBtn = () => {
    props.ondeletebtn(props.id);
  };

  const onEditBtnChk = () => {
    props.onEditBtn(props.id);
  };

  const [editValue, setEditValue] = useState('');

  const onEditSaveBtn = () =>{
    props.eSave(props.id,editValue)
  }

  return (
    <div>
      {props.edit_chk ? (
        <div className={`todoItem ${props.chkBox && "on"}`} id={props.id}>
          <div className="edit_box">
            <input type="text" onChange={(evt) => setEditValue(evt.target.value)}/>
            <button className="save_btn" onClick={onEditSaveBtn}>save</button>
          </div>
        </div>
      ) : (
        <div className={`todoItem ${props.chkBox && "on"}`} id={props.id}> 
           <div className="noEdit_box">
          <span>{props.item}</span>
          <button className="remove_btn" onClick={onDeleteBtn}>
            remove
          </button>
          <button className="edit_btn" onClick={onEditBtnChk}>edit</button>
          <input type="checkbox" className="chk" onChange={onChangeCheckbox}/>
        </div>
     
        </div>
      )}
    </div>
  );
}

export default Box;