import deleteStyle from './UI.module.css'
import {RxCross2} from "react-icons/rx";
export const DeleteIcon = (props)=> {
    return(
    <div className={deleteStyle.delete} onClick={props.onClick}>
         <RxCross2 style={{width: '25px', height: '25px', color: "white", cursor: "pointer"}}/>
    </div>
    )
}