import { Link } from "react-router-dom"
import "./Register.scss"
import { useState } from "react"
import axios from "axios"
const Register = () => {

   const [inputs, setInputs]=useState({
     name:"",
     username:"",
     email:"",
     password:""
   })

   const [err, setErr]=useState(null);

   const handleChange= e=>{
     setInputs(prev=>({...prev, [e.target.name]:e.target.value}));
   }
  //  console.log(inputs)

  const handleClick= async (e)=>{
     e.preventDefault();

     try{
         await axios.post("http://localhost:8000/api/auth/register", inputs)
     }
     catch(err){
       setErr(err.response.data);
     }
  }
  console.log(err);
  return (
    <div className="register">
    <div className="card">
    <div className="left">
         <h1>Register</h1>
         <form>
          <input type="text" placeholder="Name" name="name" onChange={handleChange}/>
          <input type="text" placeholder="username" name="username" onChange={handleChange}/>
          <input type="email" placeholder="Email"  name="email" onChange={handleChange}/>
          <input type="password" placeholder="password" name="password" onChange={handleChange}/>
          {err && err}
          <button onClick={handleClick}>Register</button>
         
         </form>
      </div>
      <div className="right">
          <h1>Ravi Social</h1>
          <p>Those that persevere, despite all they've been through, those who still believe there is good in the world, as dark things we often find that light the most</p>
          <span>Do u have an account?</span>
          <Link to="/login"><button>Login</button></Link>
      </div>
      
    </div>
  </div>
)
}

export default Register
