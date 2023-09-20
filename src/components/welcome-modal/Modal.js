import React from 'react'
import { Fragment } from 'react'
import modalStyle from './Modal.module.css'
import ReactDOM from 'react-dom'
import { DeleteIcon } from '../UI/deleteIcon'
const Backdrop = (props)=> {
return <div className={modalStyle.backdrop}>
    <DeleteIcon onClick={props.deleteWlcm} />
</div>
} 
const ModalOvalay = (props)=> {
    return<div className={modalStyle.modal}>
        <div className={modalStyle.content}>{props.children}</div>
    </div>
}
const createElement =  document.getElementById('overlay')
const Modal = (props)=> {
    return(
        <Fragment>
            {ReactDOM.createPortal(<Backdrop deleteWlcm={props.deletingWelcome }/>, createElement)}
            {ReactDOM.createPortal(<ModalOvalay>{props.children}</ModalOvalay>, createElement)}
        </Fragment>
    )
}
export default Modal