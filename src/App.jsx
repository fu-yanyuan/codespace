import './App.css'
import AuthPage from './components/Auth/AuthPage'
import { useAuthContext } from './contexts/AuthContext'
import Dashboard from './components/Dashboard'

function App() {
  const { user } = useAuthContext()

  return (
    <div className='app bg-neutral-900'>
      {user ? <Dashboard /> : <AuthPage />}
    </div>
  )
}

export default App
