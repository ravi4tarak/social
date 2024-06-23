
import { Link, useNavigate } from "react-router-dom"
import "./login.scss"
import { useContext, useState } from "react"
import { AuthContext } from "../../context/authContext"

const Login = () => {
   
   const [inputs, setInputs]=useState({
      username:"",
      password:""
   })

   const [err, setErr]=useState(null);

   const navigate=useNavigate()

   const handleonChange=(e)=>{
      setInputs((prev)=>({...prev, [e.target.name]:e.target.value}));
   }
   const {login}= useContext(AuthContext);
  
    const handleLogin= async (e)=>{
      e.preventDefault()
      try{
        await login(inputs);
        navigate("/")
      }
      catch(err)
      {
         setErr(err.response.data);
      }
      
    }
  return (
    <div className="login">
      <div className="card">
        <div className="left">
            <h1>Hello World.</h1>
            <p>Those that persevere, despite all they've been through, those who still believe there is good in the world, as dark things we often find that light the most</p>
            <span>Don't you have an account </span>
            <Link to="/register"><button>Register</button></Link>
        </div>
        <div className="right">
           <h1>Login</h1>
           <form>
            <input type="text" placeholder="username" name="username" onChange={handleonChange}/>
            <input type="password" placeholder="password" name="password" onChange={handleonChange}/>
            {err && err}
            <button onClick={handleLogin}>Login</button>
           </form>
        </div>
      </div>
    </div>
  )
}

export default Login
