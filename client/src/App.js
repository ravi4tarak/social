import Leftbar from "./components/Leftbar/Leftbar";
import Navbar from "./components/Navbar/Navbar";
import Rightbar from "./components/Rightbar/Rightbar";
import Login from "./pages/Login/Login"
import Register from "./pages/register/Register";
import Share from "./components/Share/Share";
import "./style.scss";
// import Profile from "./pages/profile/Profile";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile"
 import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext, AuthContextProvider } from "./context/authContext";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
 function App() {
   
  const {currentUser}=useContext(AuthContext);
    
  const {darkMode}=useContext(DarkModeContext)
  
  const queryClient= new QueryClient()
   console.log(darkMode);

  const Layout =()=>{
    return(
      <QueryClientProvider client={queryClient}>
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar/>
          <div style={{display:"flex"}}>
            <Leftbar/>
            <div style={{flex:6}}>
              <Outlet/>
            </div>
            <Rightbar/>
          </div>
        </div>
      </QueryClientProvider>
    )
  }

  const ProtectedRoute=({children})=>{
     
    if(!currentUser) return <Navigate to="/login"/>
    return children;
   
  }
  const router = createBrowserRouter([

    {
       path:"/",
       element:(
         <ProtectedRoute> <Layout/></ProtectedRoute>
       ),
      
       children: [
         {
          path:"/",
          element:<Home/>
         },
         {
          path:"/profile/:id",
          element:<Profile/>
         },
       ]
    },
    {
      path: "/login",
      element:<Login/>,
    },

    {
      path: "/register",
      element:<Register/>,
    },
  ]);

  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
