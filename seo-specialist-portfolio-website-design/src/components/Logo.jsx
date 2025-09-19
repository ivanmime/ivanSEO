import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ size = "lg", showText = true }) => {
  const sizes = {
    sm: { container: "w-8 h-8", text: "text-lg", image: "w-8 h-8" },
    md: { container: "w-12 h-12", text: "text-xl", image: "w-12 h-12" },
    lg: { container: "w-16 h-16", text: "text-2xl", image: "w-16 h-16" },
    xl: { container: "w-20 h-20", text: "text-3xl", image: "w-20 h-20" }
  };

  const currentSize = sizes[size];

  return (
    <div className="flex items-center">
      <motion.div
        className={`${currentSize.container} relative flex items-center justify-center`}
        whileHover={{ scale: 1.05, rotate: 2 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img 
          src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1758272494930-Generated%20Image%20September%2019%2C%202025%20-%2010_52AM.png"
          alt="Ivan SEO Expert Logo"
          className={`${currentSize.image} object-contain`}
        />
      </motion.div>
      
      {showText && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="ml-3"
        >
          <div className={`font-bold text-gray-900 dark:text-white ${currentSize.text}`}>
            Ivan
          </div>
          <div className="text-sm text-primary-600 dark:text-primary-400 font-medium -mt-1">
            SEO Expert
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Logo;