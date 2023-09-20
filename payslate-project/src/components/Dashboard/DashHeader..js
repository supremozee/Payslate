import React from 'react'
import dashstyle from './dash.module.css'
import {MdOutlineNotificationsActive} from 'react-icons/md'
import {AiOutlineSearch} from 'react-icons/ai'
import { useState } from 'react'
export const DashHeader = ()=> {
    const [showSearch, setShowSearch] =
     useState(true)
    const handleClick = (event)=> {
        event.preventDefault()
        setShowSearch(false);
    }

return(
<div className={dashstyle.header}> 
    <ul className={dashstyle.mainheader}>
        <ul className={dashstyle.leftside}>
           <li>Dashboard</li>
            <li>Online</li>
        </ul>
        <ul className={dashstyle.rightside}>
            <li>
                { showSearch && <AiOutlineSearch className={dashstyle.search}style={{position: "absolute", top: "20px", color: "grey", fontSize: "20px"}} onClick={handleClick} />}
                <input type="search" placeholder="type here" onClick={handleClick}  className={dashstyle.off}/></li>
            <li><MdOutlineNotificationsActive style={{color: "rgb(36, 145, 189)", fontSize: "22px", position: "relative"}}/></li>
        </ul>
     </ul>
       
    </div>

    
)
}