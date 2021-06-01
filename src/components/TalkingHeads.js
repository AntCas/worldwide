import React from "react"

const Video = ({videoSrc}) => {
  return (
    <video width="320" height="240" autoPlay playsinline loop muted>
      <source src={videoSrc} type="video/mp4" />
    </video>
  );

}

export default Video;
