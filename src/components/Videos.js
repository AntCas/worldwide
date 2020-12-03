import React from "react"

import './Videos.scss';

const featuredVideos = [
  {
    title: "$10,000 in two days, 𝙷𝚊𝙺𝚛 from Simple Ops",
    videoId: "oLeNW7b_2E0",
  },
  {
    title: "Indie Hackers Worldwide ft. Courtland Allen",
    videoId: "om9O4ylCBKM",
  },
  {
    title: "Live Q&A With Rosie Sherry",
    videoId: "O4SvfApW54A",
  },
  {
    title: "Sold his company to Tencent at 18 years old for $2 million",
    videoId: "Vqu9QhS6dGg",
  },
  {
    title: "Q&A With Bubble Founder, co-CEO Emmanuel Straschnov",
    videoId: "jUf-yy2FI4M",
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
