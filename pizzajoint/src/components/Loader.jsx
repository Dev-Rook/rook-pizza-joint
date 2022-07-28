import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'


const loaderVariants = {
    animationOne: {
        x: [-20, 20],
        y: [0, -30],
        
        transition: {
            x: {
                yoyo: Infinity,
                duration: .5,
            },
            y: {
                yoyo: Infinity,
                duration: .25,
                ease: "easeOut"
            }
        }
    }
}


const Loader = () => {
  return (
    <motion.div className="loader"
        variants={loaderVariants}
        animate="animationOne"
    >

    </motion.div>
  )
}

export default Loader