import React from "react";
import banner from "../assets/banner.mp4";

const HomeHeader = () => {
  return (
    <div style={styles.homeContainer}>
      <video src={banner} autoPlay loop muted style={styles.video} />
    </div>
  );
};

export default HomeHeader;

const styles = {
  homeContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    zIndex: -1, // Ensures the video stays behind other content
  },
  video: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};
