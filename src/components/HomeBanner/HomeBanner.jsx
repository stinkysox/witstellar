import React from "react";
import { motion } from "framer-motion";
import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <div className="home-banner-container">
      <div className="home-banner-image-container">
        <motion.img
          src="https://res.cloudinary.com/dyqfcf950/image/upload/v1740726292/n77gewtxux0mynujqtz2.webp"
          alt="Photograph"
          className="home-banner-image"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
      <div className="home-banner-text-container">
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          As Ed Sheeran said, let&apos;s keep this love in a photograph and make
          these memories for ourselves. <br />
          The only way we can freeze time is through photograph.
        </motion.p>
      </div>
    </div>
  );
};

export default HomeBanner;
