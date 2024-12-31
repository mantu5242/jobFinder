import React from 'react'

const Login = () => {
  return (
    <div>
        <div>
            <form className=''>
                <label> Profile <input placeholder='img.jpg' type='image'></input></label>
                <label> Name <input placeholder='name' type='text'></input></label>
                <label> Email <input placeholder='email' type='email'></input></label>
                <label> Phone number <input placeholder='mobile number' type='text'></input></label>
                <label>Password <input placeholder='password' type='password'></input></label>
                <button>submit</button>
            </form>
        </div>
    </div>  
  )
}

export default Login