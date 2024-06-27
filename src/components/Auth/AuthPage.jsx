import { useState } from 'react'

import { doCreateUserWithEmailAndPassword, doSignInWithEmailAndPassword, checkWhitelist } from '../../firebase/auth'

const AuthPage = () => {
  const [loginMode, setLoginMode] = useState(true)
  const [error, setError] = useState(null)

  // login or signup input
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmpwd, setConfirmpwd] = useState(null)

  const setviewLogin = (status) => {
    setError(null)  // reset erros
    setLoginMode(status)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // confirm pwd for sign up
    if (!loginMode && password != confirmpwd) {
      setError('Please confirm your password again')
      return
    }

    // check white list
    const flag = await checkWhitelist(email)
    console.log(flag)
    if (loginMode && !flag) {
      setError('User not in Whitelist')
      return
    }

    try {
      if (loginMode) {
        await doSignInWithEmailAndPassword(email, password)
      } else {
        await doCreateUserWithEmailAndPassword(email, password)
      }

    } catch (err) {
      console.log(err)
      setError(err.message)
    }
  }

  return (
    <div className='w-full h-screen flex self-center place-content-center place-items-center bg-neutral-900'>
      <div className='w-96 shadow-xl p-4 space-y-5 border border-yellow-500 rounded-xl'>
        <div className="text-center mt-2">
            <h3 className="text-neutral-100 text-xl font-semibold sm:text-2xl">Welcome to Codespace</h3>
        </div>
      <form className='space-y-5 flex flex-col'>
        <label className="input input-bordered flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
          <input type="text" className="grow" placeholder="Email" 
            onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
          <input type="password" className="grow" placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)}/>
        </label>
        {!loginMode &&
          <label className="input input-bordered flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
            <input type="password" className="grow" placeholder="Confirm Password" 
              onChange={(e) => setConfirmpwd(e.target.value)}/>
          </label>
        }
        {error && <p style={{color : 'rgb(255, 0, 0)'}}>{error}</p>}
        <input  className='h-12 border border-green-600 text-green-600 rounded-lg cursor-pointer hover:bg-green-600 hover:text-neutral-800'
                type="submit" 
                onClick={(e) => handleSubmit(e, loginMode)}
              />
      </form>
      { loginMode ?
        <p className="text-center text-neutral-300 text-sm">Don't have an account? <span className="hover:underline font-bold cursor-pointer" onClick={() => setviewLogin(false)}>Sign up</span></p>
        :
        <p className="text-center text-neutral-300 text-sm">Already have an account? <span className="hover:underline font-bold cursor-pointer" onClick={() => setviewLogin(true)}>Sign in</span></p>
      }
      {/* <p className="text-center text-sm">Don't have an account? <span className="hover:underline font-bold cursor-pointer" onClick={() => setviewLogin(false)}>Sign up</span></p> */}

    </div>
  </div>
  )
}

export default AuthPage