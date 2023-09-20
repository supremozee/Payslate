import Form from "./Form"
import Formpic from "./formpic"
import formStyle from './login.module.css'
export const Login = props=> {
    return (
        <div className = {formStyle.container}>
            <Formpic/>
            <Form onClickLoginButton={props.onShowWelcome} />
        </div>
    )
}