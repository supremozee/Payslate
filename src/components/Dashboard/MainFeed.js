import dashStyle from './dash.module.css'
import { DashHeader } from './DashHeader.'
import {RxCross2} from "react-icons/rx";
import {BiLogOut} from 'react-icons/bi'
import {MdPayment} from 'react-icons/md'
import {MdPayments} from 'react-icons/md'
import {MdOutlinePayment} from 'react-icons/md'
export const MainFeed = ()=> {
    return (
 <div className={dashStyle.MainFeed}>
            <DashHeader/>
  <div className={dashStyle.feedContainer}>
            <div className={dashStyle.cont}>
            <div className={dashStyle.headerimg}>
              <div className={dashStyle.headertext}>
              <div className={dashStyle.sect1}>
                <h1>About Payslate</h1>
                <p>Wealth creation is an evolutionary recent positive
                  -sum game. it is about who take the opportunity first
                </p>
              </div>
              <div className={dashStyle.sect2}><RxCross2/></div>
            </div>
            <div className={dashStyle.tour}><button>Take a tour <BiLogOut/></button></div>
              </div>
          </div>
          <div className={dashStyle.paymentmethod}>
              <div className={dashStyle.pay1}>
                <MdPayment className={dashStyle.icon}/>
                <h2>Make payment method</h2>
                <button>Pay</button>
              </div>
              <div className={dashStyle.pay2}>
                <MdPayments className={dashStyle.icon2}/>
                <h2>My Payments</h2>
            <button>view</button>
          </div>
          <div className={dashStyle.pay3}>
            <MdOutlinePayment className={dashStyle.icon3}/>
            <h1>Pending Payments</h1>
            <button>Vuew</button>
          </div>
        </div>
        
  <div className={dashStyle.footer}>
      <div className={dashStyle.first}>
        <h1>payment Method</h1>
        <button>Days</button>
      </div>
      <div className={dashStyle.second}>
         <div className={dashStyle.secondIcon}>
           <MdOutlinePayment/>
         </div>
         <div className={dashStyle.text}> 
             <h3>Total payment Made</h3>
             <h2>N2,315,255.23</h2>
         </div>
      </div>
      <div className={dashStyle.image}></div>
  </div>
        </div>  
      </div>          
    )
}