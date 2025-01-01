import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({email:'',password:''})
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const {name,value} = e.target;
    setFormData((prevData) => ({...prevData,[name]:value}));

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  
    try {
      const res = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        credentials: 'include',
      });
  
      if (!res.ok) {
        throw new Error(`HTTP Error: ${res.status}`);
      }
  
      const data = await res.json();
      console.log(data.success);
  
      if (data.success) {
        navigate('/');
      }
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };
  

  return (
    <div>
        <div>
            <form className='' onSubmit={handleSubmit}>
                <div>
                    <label className=' labelHead'> Email </label>
                    <input placeholder='email' type='email' onChange={handleInputChange} name='email' value={formData.email}></input> 
                </div>
                <div>
                    <label className=' labelHead'>Password </label>
                    <input placeholder='password' type='password' onChange={handleInputChange} name='password' value={formData.password}></input>
                </div>
                <button>submit</button>
                <div>
                  <div><Link to = '/register'>Create account</Link></div>
                </div>
            </form>
        </div>
    </div>  
  )
}

export default Login