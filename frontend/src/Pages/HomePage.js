import { NavBar } from '../components/NavBar'
import SignupForm from '../components/SignupForm'
import { HomeCont } from '../components/HomeCont'

export const HomePage = () => {
   return (
      <div>
         <NavBar />
         <div className='home-container'>
            <HomeCont />
            <SignupForm />
         </div>
      </div>
   )
}
