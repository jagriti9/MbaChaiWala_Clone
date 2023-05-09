import {useEffect} from 'react';
import IntroVideo from "./component/IntroVideo";
import Section from "./component/Section";
import data from "./data/data.json";
import Footer from './component/Footer'
import Misc from './component/Misc'
import "../src/styles/App.scss";
import './styles/footer.scss'
import './styles/misc.scss'
import './styles/mediaQuery.scss'
const yellow = "#fff100",
  pink = "#ed1e79",brown="#6d3d0f",white="#fff";
const freshTopicImage = require("./assets/academy.png");
const freshTopic2Image = require("./assets/story.png");
const tedTalkImage =require("./assets/in-the-news.gif");
const franchiseImage = require("./assets/franchise.gif")
const mapIamge =require("./assets/locations.png");
const coursesImage =require("./assets/image2.png");
const albumImage =require("./assets/mba-cares.gif");
const baratImage =require("./assets/image1.png");
const chaiwalaImage =require("./assets/image3.png");

function App() {
  const { freshTopic, freshTopic2,tedTalks,franchise,map,courses,album,barat ,chaiwala} = data;
  const dotCursor=(e:any)=>{
    const cursor =document.querySelector('.cursor') as HTMLElement
    cursor.style.top = `${e.pageY-14}px`
    cursor.style.left=`${e.pageX-14}px`

    // const element = e.target
    // if(element.getAttribute("data-cursorpointer")){
    //   cursor.classList.add('cursorHover')
    // }else if(element.getAttribute("data-cursorpointermini")){
    //   cursor.classList.add('cursorHoverMini')
    // }
    // else{
    //   cursor.classList.remove('cursorHover')
    //   cursor.classList.remove('cursorHoverMini')

    // }
  }
  useEffect(() => {
    
  window.addEventListener("mousemove",dotCursor)
    return () => {
      window.removeEventListener('mousemove',dotCursor)
    }
  }, [])
  
  return (
    <div className="App">
      <IntroVideo />
      <Section
        h3={freshTopic.heading}
        text={freshTopic.text}
        btnTxt={freshTopic.btn}
        imageSrc={freshTopicImage}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgCol={yellow}
        btnColor={pink}
      />
      <Section
        h3={freshTopic2.heading}
        text={freshTopic2.text}
        btnTxt={freshTopic2.btn}
        imageSrc={freshTopic2Image}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgCol={yellow}
        btnColor={pink}
      />
      <Section
        h3={tedTalks.heading}
        text={tedTalks.text}
        btnTxt={tedTalks.btn}
        imageSrc={tedTalkImage}
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnBgCol={pink}
        btnColor={yellow}
      />
       <Section
        h3={franchise.heading}
        text={franchise.text}
        btnTxt={franchise.btn}
        imageSrc={franchiseImage}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgCol={brown}
        btnColor={yellow}
      />
       <Section
        h3={map.heading}
        text={map.text}
        imageSrc={mapIamge}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgCol={brown}
        btnColor={yellow}
        hasBtn={false}
      />
       <Section
        h3={courses.heading}
        text={courses.text}
        btnTxt={courses.btn}
        imageSize={"30%"}
        imageSrc={coursesImage}
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnBgCol={pink}
        btnColor={yellow}
      />
       <Section
        h3={album.heading}
        text={album.text}
        btnTxt={album.btn}
        imageSrc={albumImage}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgCol={brown}
        btnColor={yellow}
      />
       <Section
        h3={barat.heading}
        text={barat.text}
        btnTxt={barat.btn}
        imageSrc={baratImage}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgCol={yellow}
        btnColor={pink}
      />
       <Section
        h3={chaiwala.heading}
        text={chaiwala.text}
        btnTxt={chaiwala.btn}
        imageSrc={chaiwalaImage}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgCol={brown}
        btnColor={yellow}
      />
      <Footer/>
      <Misc/>
    </div>
  );
}

export default App;
