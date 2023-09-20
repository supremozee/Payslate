// import {  useNavigate } from 'react-router-dom'
import formStyle from './login.module.css'
const Form = (props)=> {
    return(
       <div className = {formStyle.formWrap}>
        <div className = {formStyle.formContainer}>
        <header className= {formStyle.header}>
            <h2>Payslate</h2>
        </header>
             <div className={formStyle.options}>
                <button>User</button>
                <button>Organization</button>
            </div>
                <form className={formStyle.form} >
                    <div className={formStyle.formInput}>
                        <label>Username</label>
                        <input type='text' className={formStyle.input}/>
                    </div>
                    <div className={formStyle.formInput2}>
                        <label>Password</label>
                        <input type='password'  className={formStyle.input}/>
                    </div>
                <div className={formStyle.forgot}><span>Forgot Password</span></div>
            <div className={formStyle.submit} onClick={props.onClickLoginButton} >
                <button>Login</button> 
                </div>
                </form>
         </div>
            <footer className={formStyle.footer}>
                <h3>Sign Up</h3>
                <p className={formStyle.footerParagraph}>By clicking the "Login" button,
                you agree to HuiosPay Terms & Conditions
                </p>
            </footer>
       </div>
    )
}
export default Form