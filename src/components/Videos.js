import React from "react"

import './Videos.scss';

// Play Button
import PlayButton from "../assets/play-button.svg";

// Video preview images
import Courtland from "../images/youtube/Courtland.png";
import Emmanuel from "../images/youtube/Emmanuel.png";
import Richard from "../images/youtube/Richard.png";
import Rosie from "../images/youtube/Rosie.png";
import Taylor from "../images/youtube/Taylor.png";

const featuredVideos = [
  {
    title: "30,000 active users and 100% growth",
    image: Taylor,
    videoId: "CmQII6taRxA",
  },
  {
    title: "Indie Worldwide ft. Courtland Allen",
    image: Courtland,
    videoId: "om9O4ylCBKM",
  },
  {
    title: "Live Q&A With Rosie Sherry",
    image: Rosie,
    videoId: "O4SvfApW54A",
  },
  {
    title: "Sold to Tencent at 18 years old",
    image: Richard,
    videoId: "Vqu9QhS6dGg",
  },
  {
    title: "Bubble Founder Emmanuel Straschnov",
    image: Emmanuel,
    videoId: "jUf-yy2FI4M",
  }
]

const Videos = () => (
  <section className="Videos">
    <h2>Past Meetups</h2>
    <section className="VideoContainer">
      { featuredVideos.map((video, i) => (
        <a href={`https://www.youtube.com/watch?v=${video.videoId}`} className="VideoPreview">
          <div className="Gradient" />
          <p className="VideoTitle">{video.title}</p>
          <img src={video.image} alt={video.title} className="VideoImage" />
          <PlayButton className="PlayButton"/>
        </a>
      )) }
    </section>
  </section>
)

export default Videos
