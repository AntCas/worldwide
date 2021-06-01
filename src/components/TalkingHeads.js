import React from "react"
import PaulinaAndOras from "../video/talking-heads.mp4";

const TalkingHeads = () => {
  return (
    <video width="320" height="240" autoPlay playsinline loop muted>
      <source src={PaulinaAndOras} type="video/mp4" />
    </video>
  );

}

export default TalkingHeads;
