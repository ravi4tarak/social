import "./Leftbar.scss"
import Friends from "../../assets/png1.png";
import Groups from "../../assets/png6.png";
import Market from "../../assets/png7.png";
import Watch from "../../assets/png8.png";
import Memories from "../../assets/png9.png";
import Events from "../../assets/png10.png";
import Gaming from "../../assets/png11.png";
import Gallery from "../../assets/png12.png";
import Videos from "../../assets/png13.png";
import Messages from "../../assets/png2.png";
import Tutorials from "../../assets/png3.png";
import Courses from "../../assets/png4.png";
import Fund from "../../assets/png5.png";
const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="section1">
            <div className="user">
            <img src="https://wallpapers.com/images/high/klaus-mikaelson-with-a-small-smile-4w8avnnexdd5pmsb.webp" alt=""/>
            <span>Ravikumar</span>
           </div>
           <div className="friends">
            <img src={Friends} alt=""/>
            <span>Friends</span>
           </div>
           <div className="groups">
            <img src={Groups} alt=""/>
            <span>Groups</span>
           </div>
           <div className="marketplace">
           <img src={Market} alt=""/>
           <span>Marketplace</span>
          </div>
          <div className="watch">
          <img src={Watch} alt=""/>
          <span>Watch</span>
         </div>
         <div className="memories">
         <img src={Memories} alt=""/>
         <span>Memories</span>
        </div>
        </div>
        <hr/>
        <div className="section2">
           <span>Your Shortcuts</span>
           <div className="events">
            <img src={Events} alt=""/>
            <span>Events</span>
           </div>
           <div className="gaming">
            <img src={Gaming} alt=""/>
            <span>Gaming</span>
           </div>
           <div className="gallery">
            <img src={Gallery} alt=""/>
            <span>Gallery</span>
           </div>
           <div className="videos">
            <img src={Videos} alt=""/>
            <span>Videos</span>
           </div>
           <div className="messages">
            <img src={Messages} alt=""/>
            <span>Messages</span>
           </div>

        </div>
        <hr/>
        <div className="section3">
            <span>Others</span>
            <div className="fundraiser">
            <img src={Fund} alt=""/>
            <span>Fundraiser</span>
           </div>
           <div className="tutorials">
           <img src={Tutorials}alt=""/>
           <span>Tutorials</span>
          </div>
          <div className="courses">
          <img src={Courses} alt=""/>
          <span>Courses</span>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Leftbar
