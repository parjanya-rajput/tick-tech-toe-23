import './App.css'
import { HomePage } from './Pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { FormPage } from './Pages/FormPage'
import { LoginPage } from './Pages/SigninPage'
import { Donate } from './Pages/Donate'
import AboutUs from './components/AboutUs'
import SignupForm from './components/SignupForm'
import SigninForm from './components/SigninForm'
function App() {

   return (
      <div className="App">
         <BrowserRouter>
            <Routes>
               <Route exact path="/" element={<HomePage />} />
               <Route exact path="/form" element={<FormPage />} />
               <Route exact path="/donate" element={<Donate />} />
               <Route exact path="/aboutus" element={<AboutUs />} />
               <Route exact path="/register" element={<SignupForm />} />
               <Route exact path="/login" element={<SigninForm />} />
               
            </Routes>
         </BrowserRouter>
      </div>
   )
}

export default App