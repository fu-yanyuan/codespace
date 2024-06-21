import { useState } from 'react'
import './App.css'
import ProfileContainer from './components/ProfileContainer'
import ControlContainer from './components/ControlContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen min-w-[360px] bg-neutral-900">
      <div className="flex flex-col mx-auto w-full grow p-4 md:max-w-[888px] md:p-6 lg:max-w-screen-xl bg-neutral-900">
        <ProfileContainer />
      </div>
      <div className="flex flex-col mx-auto w-full grow px-4 md:max-w-[888px] md:px-6 pb-6 lg:max-w-screen-xl bg-neutral-900">
        <ControlContainer />
      </div>
    </div>
  )
}

export default App
