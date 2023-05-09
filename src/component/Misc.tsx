import {BsMouse} from 'react-icons/bs'
const logo = require("../assets/logo.png") 
const Misc = () => {
  return (
    <>
      <div className="cursor"></div>
      <a href="/" className="logo"><img src={logo} data-cursorpointer={true}/></a>
      <a href="/franchise" className="franchiseButton" data-cursorpointer={true}>GET A FRANCHISE</a>
      <BsMouse className="scrollButton"/>
    </>
  )
}


export default Misc
