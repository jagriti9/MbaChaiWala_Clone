import '../styles/intro.scss';
const video = require('../assets/MBAChaiWala.mp4')
const IntroVideo = () => {
  return (
    <div className="intro">
      <video
        src={video}
        muted
        autoPlay
        loop
        controlsList="nodownload"
      ></video>
      <div></div>
    </div>
  );
};

export default IntroVideo;
