import dashStyle from './dash.module.css'
import {User} from './User'
import {More} from './More'
export const Profile = ()=> {
    return(
        <div className={dashStyle.Profile}>
            <User/>
            <More/>
        </div>
    )
}