
import { useState } from "react"
import "./Update.scss"
import { makeRequest } from "../../axios";
import { useQueryClient, useMutation } from "@tanstack/react-query";

const Update = ({setOpenUpdate, user}) => {
    
    const [cover, setCover]=useState(null);
    const [profile, setProfile]=useState(null);

    const [details, setDetails]=useState({
        name:"",
        city:"",
        website:""
    });

const upload =async (file)=>{
    try{
        const formData= new FormData();
        formData.append("file", file);
        const res=await makeRequest.put("/upload", formData)
        return res.data;
    }
    catch(err)
    {
        console.log(err);
    }
    }

const handleChange= (e)=>{
    setDetails((prev)=>({...prev,[e.target.name]:[e.target.value]}));
}

const queryClient=useQueryClient();

const mutation = useMutation({
    mutationFn: (user) => {
      return makeRequest.put("/users", user);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    }
});

  const handleSubmit= async (e) =>{
    e.preventDefault();
    let coverUrl;
    let profileUrl;

    coverUrl = cover ? await upload(cover) : user.coverPic;
    profileUrl = profile ? await upload(profile) : user.profilePic;
  
     console.log(coverUrl)     
     console.log(profileUrl)     
       

    mutation.mutate({ ...details, coverPic:coverUrl, profilePic:profileUrl });
   
    setOpenUpdate(false);
  };
  return (
    <div className="update">
    <form>
      <label htmlFor="cover">
        <span>Cover Picture</span>
      <div className="imgContainer">
      </div>
      <input
              type="file"
              id="cover"
              style={{ display: "none" }}
              onChange={(e) => setCover(e.target.files[0])}
       />
    </label>
    <label htmlFor="profile">
    <span>Profile Picture</span>
    <div className="imgContainer"> 
    </div>
  </label>
  <input
    type="file"
    id="profile"
    style={{ display: "none" }}
    onChange={(e) => setProfile(e.target.files[0])}
  />
        <input type="file"/>
        <input type="text" name="name" onChange={handleChange}/>
        <input type="text" name="city" onChange={handleChange}/>
        <input type="text" name="website" onChange={handleChange}/>
        <button onClick={handleSubmit}>Update</button>
      </form>
    <button onClick={()=>setOpenUpdate(false)}>X</button>
    </div>
  )
}

export default Update
