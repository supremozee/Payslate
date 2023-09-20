import { Login } from "./components/Login/Login";
import { Route, Routes } from "react-router-dom"
import { Welcome } from "./components/welcome-modal/welcome";
import { useState } from "react";
import { Dashboard } from "./components/Dashboard/Dashboard";
const App =()=> {
  const [showWelcome, setShowWelcome] = useState(false)
  const handleWelcome = (event)=> {
    event.preventDefault()
    setShowWelcome(true);
    
  }
  const removeWelcome = (event)=> {
    event.preventDefault()
    setShowWelcome(false)
  }
  return (
    <div>
  <Routes>
  <Route path="/" element={<Login onShowWelcome= {handleWelcome}/>}/>
  <Route path="/dashboard" element={<Dashboard/>}/>
</Routes>
{showWelcome && <Welcome deleteWelcome = {removeWelcome}/>  }
    </div>
  )
}
  
export default App;
