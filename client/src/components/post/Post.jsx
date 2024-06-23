import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { AuthContext } from "../../context/authContext";
import {useMutation, useQueryClient} from "@tanstack/react-query"    
import moment from "moment";
const Post = ({ post }) => {
  const {currentUser} =useContext(AuthContext);
  const [commentOpen, setCommentOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
   
  const { isLoading, error, data } = useQuery({
    queryKey: ['likes', post.id],
    queryFn: () =>
      makeRequest.get("/likes?postId=" + post.id).then((res) => {
        return res.data;
      })
  });

  const queryClient=useQueryClient();

  const mutation = useMutation({
      mutationFn: (liked) => {
        if(liked) return makeRequest.delete("/likes?postId="+post.id);
        return makeRequest.post("/likes",{ postId: post.id} )
      },
      onSuccess: () => {
        queryClient.invalidateQueries(["likes"]);
      }
  });

  const deleteMutation = useMutation({
    
    mutationFn: (postId) => {
      return makeRequest.delete("/posts/"+ postId)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    }
});
  
  const handleLike =()=>{
    mutation.mutate(data.includes(currentUser.id))
  }

  const handleDelete =()=>{
    deleteMutation.mutate(post.id)
   
  }

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">{moment(post.createdAt).fromNow()}</span>
            </div>
          </div>
          <MoreHorizIcon onClick={()=>setMenuOpen(!menuOpen)}/>
          {(menuOpen && post.userId===currentUser.id) && <button onClick={handleDelete}>Delete</button>}
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={"/upload/"+post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {isLoading? (
              "Loading" 
            ): data.includes(currentUser.id) ? (
              <FavoriteOutlinedIcon style={{color:"red"}} onClick={handleLike}/>
            ) :(
              <FavoriteBorderOutlinedIcon onClick={handleLike}/>
            )}
            {data? data.length:0} Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            0 Comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments postId={post.id}/>}
      </div>
    </div>
  );
};

export default Post;