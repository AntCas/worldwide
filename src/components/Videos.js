import React from "react"

import './Videos.scss';

const featuredVideos = [
  {
    title: "Indie Hackers Worldwide ft. Dan Bogacheck",
    videoId: "flaEA2CPQWU",
  },
  {
    title: "Indie Hackers Worldwide ft. Courtland Allen",
    videoId: "om9O4ylCBKM",
  },
  {
    title: "Live Q&A With Rosie Sherry",
    videoId: "O4SvfApW54A",
  }
]

const Videos = () => (
  <section className="Videos">
    <h2>Past Meetups</h2>
    <section className="VideoContainer">
      { featuredVideos.map((video, i) => (
        <iframe title={video.title} key={i} className="IFrame" src={`https://www.youtube.com/embed/${video.videoId}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      )) }
    </section>
  </section>
)

export default Videos
