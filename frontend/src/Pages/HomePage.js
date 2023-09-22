import { NavBar } from '../components/NavBar'
import SignupForm from '../components/SignupForm'

export const HomePage = () => {
   return (
      <div>
         <NavBar />
         <div className='home-container'>
            <SignupForm />
         </div>
      </div>
   )
}
