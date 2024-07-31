import './App.css'
import AuthPage from './components/Auth/AuthPage'
import { useAuthContext } from './contexts/AuthContext'
import Dashboard from './components/Dashboard'
import BaseFooter from './components/Footer/BaseFooter'
import BaseNavBar from './components/NavBar/BaseNavBar'

function App() {
  const { user } = useAuthContext()

  return (
    <div className='app bg-neutral-900'>

      {user ?   
        <>        
          <BaseNavBar />
          <div className='mt-4'>
            <Dashboard />
          </div>
        </>
          : <AuthPage />}

      <BaseFooter />
    </div>
  )
}

export default App
