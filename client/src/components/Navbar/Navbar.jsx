import "./Navbar.scss"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";


const Navbar = () => {

   const {toggle, darkMode}= useContext(DarkModeContext)
   const {currentUser}=useContext(AuthContext);
  return (
    <div className="navbar">
        <div className="left">
           <Link style={{textDecoration:"none"}}to="/">
             <span>Ravi'sSocial</span>
           </Link>
           <HomeOutlinedIcon/>
          {darkMode? <WbSunnyOutlinedIcon onClick={toggle}/> : <DarkModeOutlinedIcon onClick={toggle}/>}
           <GridViewOutlinedIcon/>
             <div className="search">
                <SearchOutlinedIcon/>
                <input type="text" placeholder="Search..."/>
             </div>
        </div>

        <div className="right">
            <NotificationsOutlinedIcon/>
            <EmailOutlinedIcon/>
            <PersonOutlinedIcon/>
              <div className="user">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTYctsgZhdeIA3xa3WsVW2BSrgd1A1X_DsLQ&s" alt=""/>
                <span>{currentUser.name}</span>
              </div>
         </div>
    </div>
  )
}

export default Navbar
