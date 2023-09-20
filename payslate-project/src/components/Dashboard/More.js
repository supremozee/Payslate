import dashStyle from './dash.module.css'
import {IoBookOutline} from "react-icons/io5"
import {AiOutlineMail} from "react-icons/ai"
import {MdPayment} from "react-icons/md"
import {BiErrorCircle} from "react-icons/bi"
import {CgProfile} from "react-icons/cg"
import {IoMdSettings} from 'react-icons/io'
import {BiLogOut} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
export const More = ()=> {
     const navigate = useNavigate()
     const handleClick =(event)=> {
      event.preventDefault()
      navigate("/")
     }
    return (
        <div className={dashStyle.more}>
            <div className={dashStyle.list}>
                <div className={dashStyle.mainlist}>
                     <button>
                    <IoBookOutline style={{ color: "inherit",position: "relative", right: "12px", top: "2.5"}}/>
                         Dashboard
                         </button>
                </div>
                <div className={dashStyle.mainlist}>
                     <button>
                    <AiOutlineMail style={{ color: "inherit",position: "relative", right: "12px", top: "2.5"}}/>
                         Pay Fees</button>
                </div>
                <div className={dashStyle.mainlist}>
                     <button>
                    <MdPayment style={{ color: "inherit",position: "relative", right: "12px", top: "2.5"}}/>
                         Payments</button>
                </div>
                <div className={dashStyle.mainlist}>
                     <button>
                    <BiErrorCircle style={{ color: "inherit",position: "relative", right: "12px", top: "2.5"}}/>
                         Disputes</button>
                </div>
                <div className={dashStyle.mainlist}>
                 <button>
                 <CgProfile style={{ color: "inherit",position: "relative", right: "12px", top: "2.5"}}/>
                    Profile</button>
                </div>
                <div className={dashStyle.mainlist}>
                     <button>
                    <IoMdSettings style={{ color: "inherit",position: "relative", right: "12px", top: "2.5"}}/>
                         Settings</button>
                </div>
            </div>
            <div className={dashStyle.border}></div>
            <div className={dashStyle.logout} onClick={handleClick}><button>
               <BiLogOut style={{ color: "inherit",position: "relative", right: "12px", top: "2.5"}}/>
               Log Out</button></div>
        </div>
    )
}