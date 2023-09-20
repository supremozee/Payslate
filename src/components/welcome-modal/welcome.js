import Modal from './Modal'
import welcomeStyle from './welcome.module.css'
import selfie from './selfie2.jpg'
import {PiSignInLight} from "react-icons/pi"
import { useNavigate } from 'react-router-dom'
export const Welcome = (props)=> {
  const navigate = useNavigate()
  const handleClick = (e, props) => {
    e.preventDefault()
    navigate("/dashboard");
  }
    return(
    <>
    <Modal deletingWelcome = {props.deleteWelcome}>
      <div className={welcomeStyle.welcome}>
      <img className={welcomeStyle.profilepicture} src={selfie} alt='selfie'/>
      <div className={welcomeStyle.welcometext}> 
      <span>Welcome Back</span>
        <span>Stanley Dafe</span>
        </div>
        <div className={welcomeStyle.buttoncont} onClick={handleClick}>
        <button className={welcomeStyle.button} onClick={props.deleteWelcome}>
          Go to Dashboard
          </button>
          <PiSignInLight style={{color: 'white', padding: '8px', position: "relative",right: "30px"}}onClick={props.deleteWelcome}/>
        </div>
        
        </div>
      </Modal></>
    )
}