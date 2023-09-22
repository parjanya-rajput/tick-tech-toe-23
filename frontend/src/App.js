import './App.css'
import { HomePage } from './Pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import  FormInfo  from './components/FormInfo'

function App() {

   return (
      <div className="App">
         <BrowserRouter>
            <Routes>
               <Route exact path="/" element={<HomePage />} />
               <Route exact path="/forminfo" element={<FormInfo />} />
            </Routes>
         </BrowserRouter>
      </div>
   )
}

export default App
