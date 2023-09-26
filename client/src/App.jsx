
import {Home, Landing , Form , Loggin, Profile, Payment, Plan} from "./Views"
import { Route , Routes} from "react-router-dom"

const App = () => {
  

  return (
    <div>
      <Routes>

    <Route path="/" element={<Landing/>}/>
    <Route path="/loggin" element={<Loggin/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/create" element={<Form/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/payment" element={<Payment/>}/>
    <Route path="/plan" element={<Plan/>}/>

    </Routes>
    </div>
  )
}

export default App
