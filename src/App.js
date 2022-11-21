import './App.css';
import { useState } from 'react'
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
function Header() {

  const backgroundColor = {
    margin: "20px",
    marginRight: "30px",
    color: "white",
    backgroundColor: "#383838",
    height: "25px",
    width: "25px",
    borderRadius: "50%",
    padding: "15px",
  }
  return (
    <div className="header">
      <h2>Sasmod</h2>
      <div className="icons">
        <NotificationAddIcon style={backgroundColor} />
        <MessageOutlinedIcon style={backgroundColor} />
      </div>
    </div>
  )
}

function Toggle() {
  const [check, setcheck] = useState(true)
  function toggle() {
    setcheck(prevData => !prevData)
  }
  return (
    <div className="toggle" onClick={toggle}>
      <div className={check ? "style explore selected" : "style explore"}>Explore</div>
      <div className={!check ? "style explore selected" : "style explore"}>Discover</div>

    </div>
  )
}

function StoryCard() {
  const style = {
    height: "30px",
    width: "30px",
    margin: "0px",
    padding: "0px",
    borderRadius: "50%",
    // marginTop:"10px",


  }
  return (
    <div className='story-container'>
      <div className='story-image'>
        <img src={require('.//images/posts/post1.jpg')}></img>

      </div>
      <div className='story-footer'>
        <div >
          <img src={require('.//images/profile/profile1.jpg')} style={style}></img>
        </div>
        <div className='story-footer-details'>
          <h5>Omkar Relkar</h5>
        </div>
      </div>
    </div>
  )
}

function PostCard(props) {
  const backgroundColor = {
    // margin: "20px",
    // marginRight: "30px",
    color: "white",
    backgroundColor: "#383838",
    height: "20px",
    width: "20px",
    borderRadius: "50%",
    marginLeft: "auto",
    marginRight: "10px",
    padding: "10px",
  }
  const Color = {
    color: "white",
    margin: "5px",
  }
  return (
    <div className='post-container'>
      <div className="post-header">
        <img src={require('.//images/profile/profile1.jpg')} />
        <div className='details'>
          <h3>{props.name}</h3>
          <h5>{props.location}</h5>
        </div>
        <MoreHorizOutlinedIcon style={backgroundColor} />
      </div>
      <div className='post-image'>
        <img src={require('.//images/posts/post1.jpg')}></img>
        <FavoriteBorderOutlinedIcon style={Color} />
        <MapsUgcOutlinedIcon style={Color} />
        <NearMeOutlinedIcon style={Color} />

      </div>
      <div className='likeComment-container'>
        <h10>200 <span className='likeComment'>Likes &#x2022; </span> 20 <span className='likeComment'>Comments</span></h10><br></br>
        <h9>Atul patil</h9><span className='likeComment'>Too Good Picture</span>
      </div>

    </div>
  )
}


function Body() {
  return (
    <div className="main-conatiner">
      <h2>Stories</h2>
      <div className="story-main-container">
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />


      </div>
      <div className="toggle-container">
        <Toggle />
      </div>
      <div className='postCard-holder'>
        <PostCard name="Omkar Relkar" location="Pune" profileURL=".//images/profile/profile1.jpg" postURL=".//images/posts/post1.jpg" />
        <PostCard name="Omkar Relkar" location="Pune" profileURL=".//images/profile/profile1.jpg" postURL=".//images/posts/post1.jpg" />
        <PostCard name="Omkar Relkar" location="Pune" profileURL=".//images/profile/profile1.jpg" postURL="" />
        <PostCard name="Omkar Relkar" location="Pune" profileURL=".//images/profile/profile1.jpg" postURL="" />
        <PostCard name="Omkar Relkar" location="Pune" profileURL=".//images/profile/profile1.jpg" postURL="" />

      </div>
    </div>
  )
}

function Footer() {
  const backgroundColor = {
    // margin: "20px",
    // marginRight: "30px",
    color: "white",
    backgroundColor: "#29fd53",
    height: "70px",
    width: "70px",
    borderRadius: "50%",
    fontSize: "small",
    // marginLeft:"45%",
    // marginRight:"45%",
    transform: "translateY(-35px)",
    top: "-50%",
    // backgroundClip:"border-box"


  }
  const backgroundColor1 = {
    // margin: "20px",
    // margin
    // marginLeft: "150px",
    color: "white",
    backgroundColor: "#383838",
    height: "40px",
    width: "40px",
    borderRadius: "50%",
    fontSize: "small",
    // marginRight:"auto",
    padding: "10px",

  }
  const backgroundColor2 = {
    // margin: "20px",
    // marginLeft: "500px",
    color: "white",
    backgroundColor: "#383838",
    height: "40px",
    width: "40px",
    borderRadius: "50%",
    fontSize: "small",
    // marginRight:"100px",
    padding: "10px",

  }
  return (
    <div className='footer'>
      <LockPersonOutlinedIcon style={backgroundColor1} />
      <AddOutlinedIcon style={backgroundColor} />
      <PersonOutlineOutlinedIcon style={backgroundColor2} />

    </div>
  )
}

function App() {
  return (
    <div className="container">

      <Header />
      <Body />

      <Footer />
    </div>
  );
}

export default App;
