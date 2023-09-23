import './App.css'
import { HomePage } from './Pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { FormPage } from './Pages/FormPage'
import { Donate } from './Pages/Donate'
function App() {

   return (
      <div className="App">
         <BrowserRouter>
            <Routes>
               <Route exact path="/" element={<HomePage />} />
               <Route exact path="/form" element={<FormPage />} />
               <Route exact path="/donate" element={<Donate />} />
            </Routes>
         </BrowserRouter>
      </div>
   )
}

export default App