import { NavBar } from '../components/NavBar'
import AuthForm from '../components/AuthForm'
import { HomeCont } from '../components/HomeCont'

export const HomePage = () => {
   return (
      <div>
         <NavBar />
         <div className='home-container'>
            <HomeCont />
            <AuthForm />
         </div>
      </div>
   )
}
