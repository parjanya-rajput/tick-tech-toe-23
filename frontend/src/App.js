import './App.css'
import { HomePage } from './Pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { Donate } from './Pages/donate'

function App() {

   return (
      <div className="App">
         <BrowserRouter>
            <Routes>
               <Route exact path="/" element={<HomePage />} />
               <Route exact path="/donate" element={<Donate />} />
            </Routes>
         </BrowserRouter>
      </div>
   )
}

export default App
