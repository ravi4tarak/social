import "./Profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";
import { makeRequest } from "../../axios";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import Update from "../../components/update/Update";

const Profile = () => {
  const [openUpdate, setOpenUpdate]=useState(false);
  const { currentUser } = useContext(AuthContext);
  const userId = parseInt(useLocation().pathname.split("/")[2]);

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["users", userId],
    queryFn: () =>
      makeRequest.get("/users/find/" + userId).then((res) => res.data),
  });

  const {
    isLoading: isrLoading,
    error: rerror,
    data: rdata,
  } = useQuery({
    queryKey: ["relationships", userId],
    queryFn: () =>
      makeRequest.get("/relationships?followedUserId=" + userId).then((res) => res.data),
  });

  const mutation = useMutation({
    mutationFn: (following) => {
      if (following) return makeRequest.delete("/relationships?userId=" + userId);
      return makeRequest.post("/relationships", { userId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["relationships", userId]);
    },
  });

  const handleFollow = () => {
    mutation.mutate(rdata.includes(currentUser.id));
  };

  if (isLoading || isrLoading) {
    return <div>Loading...</div>;
  }

  if (error || rerror) {
    return <div>Error loading data</div>;
  }

  const { coverPic, profilePic, name, city, website } = data;

  return (
    <div className="profile">
      <div className="images">
        <img
          src={"/upload/"+data.coverPic || "https://wallpapers.com/images/high/klaus-mikaelson-with-a-small-smile-4w8avnnexdd5pmsb.webp"}
          //alt="Cover"
          className="cover"
        />
        <img
          src={"/upload/"+profilePic || "https://wallpapers.com/images/high/klaus-mikaelson-with-a-small-smile-4w8avnnexdd5pmsb.webp"}
          //alt="Profile"
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://instagram.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://twitter.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://linkedin.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://pinterest.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>{name}</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>{city}</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>{website}</span>
              </div>
            </div>
            {userId === currentUser.id ? (
              <button onClick={()=>setOpenUpdate(true)}>Update</button>
            ) : (
              <button onClick={handleFollow}>
                {rdata.includes(currentUser.id) ? "Following" : "Follow"}
              </button>
            )}
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts userId={userId}/>
      </div>
      {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data}/>}
    </div>
  );
};

export default Profile;
