import './App.css'
import { HomePage } from './Pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import FormInfo from './components/FormInfo'
import { Donate } from './Pages/donate'
import SingInForm from './components/SigninForm'
function App() {

   return (
      <div className="App">
         <BrowserRouter>
            <Routes>
               <Route exact path="/" element={<HomePage />} />
               <Route exact path="/FormInfo" element={<FormInfo />} />
               <Route exact path="/donate" element={<Donate />} />
               <Route exact path="/signinform" element={<SingInForm />} />
            </Routes>
         </BrowserRouter>
      </div>
   )
}

export default App