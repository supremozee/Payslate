import selfie from '../welcome-modal/selfie2.jpg'
import { AiOutlineCamera} from "react-icons/ai";
import dashStyle from './dash.module.css'
export const User = ()=> {
    return (
        <div className={dashStyle.user}>
          <div style={{position: "relative", display: "flex", justifyContent: "center", paddingBottom: "13px" }}>
      <img className={dashStyle.profilepicture} src={selfie} alt='selfie'/>
      <AiOutlineCamera style={{position: "absolute", bottom:"0", color: "black", background: "white", borderRadius: "10px", padding: "4px", marginTop: "20px"}}/>
          </div>
      <span className={dashStyle.dp}>Dafe Stanley</span>
      <span className={dashStyle.un}>@stanleydafe</span>
        </div>
    )
}