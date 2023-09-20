import { Profile } from "./Profile"
import dashStyle from './dash.module.css'
import {MainFeed} from './MainFeed'
export const Dashboard = ()=> {
    return(
        <div className={dashStyle.general}>
            <div className={dashStyle.container}>
         <div className={dashStyle.Dashboard}>
            <Profile/>
            <MainFeed/>
        </div>
        </div>
         
        </div>
        
       
    )
}