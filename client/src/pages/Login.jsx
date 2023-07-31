import React from 'react'

function Login() {
    const google =()=>{
        window.open("http://localhost:5000/auth/google","_self")
    }
  return (
    <div>
        <h1 className='longinTitle'>Choose a Login mehtod</h1>
        <div className='wrapper'>
            <div className="left">
                <div className="loginButton">
                    <button className='google'>
                        <h1 className='google' onClick={google}>GOOGLE</h1>
                    </button>
                    <h1 className='facebook'>facebook</h1>
                    <h1 className='github'>github</h1>
                </div>
            </div>
            <div className='right'>
                <input type="text" placeholder='username' />
                <input type="password" placeholder='password' />
                <button className="submit">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login