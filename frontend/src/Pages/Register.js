import React , {useState}from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.css'
const Register = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({profilePic:null,username:'',email:'',phonenumber:'',password:''})
    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(formData);
        try{
            const res = await fetch('http://localhost:8000/api/auth/register',
            {method: 'POST',
            headers: { 'content-type' : 'application/json'},
            body : JSON.stringify(formData),
            }
            )

            if(res.ok){
                navigate('/login')
            }
        }
        catch(error){
            console.log("Error during Registration",error.message);
        }
    }
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({...prevData,[name]:value}));
        console.log(value)
    }
    const handleFileChange = (e) => {
        const {file} = e.target;
        setFormData((prevData) => ({...prevData,profilePic:file[0]}));
    }

  return (
    <div>
        <div className='registrationMainBox2' onSubmit={handleSubmit}>
            <form className='registerationFormbox'>
                <div>
                    <label className='registrationProfile labelHead'> Profile</label>
                    <input placeholder='img.jpg' type='file' onChange={handleFileChange} name='profilePic' value={formData.profilePic}></input>
                </div>
                <div>     
                    <label className='registrationName labelHead'> Name </label>
                    <input placeholder='name' type='text' onChange={handleInputChange} name='username' value={formData.username}></input>
                </div>
                <div>
                    <label className='registrationEmail labelHead'> Email </label>
                    <input placeholder='email' type='email' onChange={handleInputChange} name='email' value={formData.email}></input> 
                </div>
                <div>
                    <label className='registrationPhoneNumber labelHead'> Phone number</label>
                    <input placeholder='mobile number' type='text' onChange={handleInputChange} name='phonenumber' value={formData.phonenumber}></input>
                    
                </div>
                <div>
                    <label className='registrationPassword labelHead'>Password </label>
                    <input placeholder='password' type='password' onChange={handleInputChange} name='password' value={formData.password}></input>
                </div>
                <button className='registrationSubmitButton'>submit</button>
            </form>
        </div>
    </div>
  )
}

export default Register