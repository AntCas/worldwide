import React from "react"

import "./video.scss";

const Video = ({videoSrc}) => {
  return (
    <video className="video" width="768" height="576" autoPlay playsinline loop muted>
      <source src={videoSrc} type="video/mp4" />
    </video>
  );

}

export default Video;
