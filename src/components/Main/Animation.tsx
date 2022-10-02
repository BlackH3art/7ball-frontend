import { FC } from "react";
import { AnimationControls, motion, TargetAndTransition } from 'framer-motion';
export const Animation: FC = () => {

  const animation: TargetAndTransition = {
    translateX: 150,
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut"
    }
  }

  return (
    <>
      <div className="w-1/2 relative">

        <motion.div 
          className="w-full h-full absolute"
          initial={{
            translateY: 20
          }}
          animate={{
            translateY: -20,
            transition: {
              duration: 4,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut"
            }
          }}
        >
          <motion.div 
            className="w-full h-full absolute"
            animate={{
              rotate: "720deg",
              transition: {
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          >

            <div className="balls-container absolute top-[50%] w-full">
              <motion.div 
                className="ball medium-ball w-[75px] h-[75px] left-[18%]"
                animate={animation}
              ></motion.div>
              <motion.div 
                className="ball small-ball w-[50px] h-[50px] left-[7%] translate-y-[-40%]"
                animate={animation}
              ></motion.div>
            </div>

            <div className="balls-container absolute top-[50%] w-full">
              <motion.div 
                className="ball medium-ball w-[75px] h-[75px] left-[18%]"
                animate={animation}
              ></motion.div>
              <motion.div 
                className="ball small-ball w-[50px] h-[50px] left-[7%] translate-y-[-40%]"
                animate={animation}
              ></motion.div>
            </div>

            <div className="balls-container absolute top-[50%] w-full">
              <motion.div 
                className="ball medium-ball w-[75px] h-[75px] left-[18%]"
                animate={animation}
              ></motion.div>
              <motion.div 
                className="ball small-ball w-[50px] h-[50px] left-[7%] translate-y-[-40%]"
                animate={animation}
              ></motion.div>
            </div>
          </motion.div>
          
          <div className="ball large-ball w-[200px] h-[200px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"></div>

        </motion.div>

      </div>
    </>
  )
}