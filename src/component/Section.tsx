import "../styles/section.scss";
import { motion } from "framer-motion";
type sectionType = {
  h3: string;
  text: string;
  hasBtn?: boolean;
  btnTxt?: string;
  imageSrc: string;
  imageSize?: any;
  backgroundColor: string;
  headingColor: string;
  textColor: string;
  btnBgCol: string;
  btnColor: string;
};
const Section = ({
  h3,
  text,
  hasBtn = true,
  btnTxt,
  imageSrc,
  imageSize = "70%",
  backgroundColor,
  headingColor,
  textColor,
  btnBgCol,
  btnColor,
}: sectionType) => {
  const headingOptions ={
    initial:{y:"-100%",opacity:0} ,
    whileInView:{y:0,opacity:1}
  }

  const textOptions={
...headingOptions,
transition:{
  delay:0.3,
}
  }
  const buttonOptions ={
    initial:{y:"100%",opacity:0} ,
    whileInView:{y:0,opacity:1},
    transition:{
      delay:0.3,
      ease:"easeIn"
    }
  }
  const imageOptions={
      initial:{scale:0.1,opacity:0} ,
      whileInView:{scale:1,opacity:1},
      transition:{
        delay:0.3,
        
      }
  }
  return (
    <section className="section" style={{ backgroundColor }}>
      <div>
        <motion.h3 style={{ color: headingColor }} data-cursorpointer={true} {...headingOptions}>
          {h3}
        </motion.h3>
        <motion.p style={{ color: textColor }} data-cursorpointer={true} {...textOptions}>
          {text}
        </motion.p>
        {hasBtn && (
          <motion.button
            style={{ color: btnColor, backgroundColor: btnBgCol }}
            data-cursorpointer={true} {...buttonOptions}
          >
            {btnTxt}
          </motion.button>
        )}
        <motion.div {...imageOptions}>
          <img src={imageSrc} alt="Imgsrc" style={{ width: imageSize }} />
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
