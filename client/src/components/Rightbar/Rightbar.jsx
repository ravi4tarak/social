import "./Rightbar.scss"

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="container">
         <div className="section1">
          <span>Suggestions for you</span>
          <div className="element">
            <div className="user">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
                <span>Ravikumar</span>
              </div>
            <div className="suggestion">
              <button className="button1">Follow</button>
              <button className="button2">Dismiss</button>
            </div>
           </div>
           <div className="element">
           <div className="user">
             <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
               <span>Ravikumar</span>
             </div>
           <div className="suggestion">
             <button  className="button1">Follow</button>
             <button  className="button2">Dismiss</button>
           </div>
          </div>

         </div>

       
         <div className="section2">
         <span>Latest Activities</span>
         <div className="element">
           <div className="user">
             <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
               <p><span>Ravikumar </span>changed their cover picture</p>
             </div>
           <div className="suggestion">
             <span>1 min ago</span>
           </div>
          </div>
          <div className="element">
          <div className="user">
            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
            <p><span>Ravikumar </span>Liked a post</p>
            </div>
          <div className="suggestion">
          <span>1 min ago</span>
          </div>
          </div>
          <div className="element">
          <div className="user">
            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
            <p><span>Ravikumar </span>Liked a comment</p>
            </div>
          <div className="suggestion">
            <span>1 min ago</span>
          </div>
         </div>
         <div className="element">
         <div className="user">
           <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
           <p><span>Ravikumar </span>Posted</p>
           </div>
         <div className="suggestion">
           <span>1 min ago</span>
         </div>
        </div>
         </div>

         
         <div className="section3">
          <span>Online Friends</span>
           <div className="user">
            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
            <div className="online"/>
            <span>Ravikumar</span>
           </div>
           <div className="user">
            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
            <div className="online"/>
            <span>Ravikumar</span>
           </div>
            <div className="user">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
              <div className="online"/>
              <span>Ravikumar</span>
            </div>
            <div className="user">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
              <div className="online"/>
              <span>Ravikumar</span>
            </div>
            <div className="user">
            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
            <div className="online"/>
            <span>Ravikumar</span>
          </div>
          <div className="user">
          <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
          <div className="online"/>
          <span>Ravikumar</span>
        </div>


         </div>
      </div>
    </div>
  )
}

export default Rightbar
