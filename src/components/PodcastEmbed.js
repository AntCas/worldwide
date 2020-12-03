import React from "react"
import './PodcastEmbed.scss';

// Podcast Embed Transistor.fm
const PodcastEmbed = () => (
  <section className="PodcastEmbed">
    <h2 className="Title">The Indie Worldwide Podcast</h2>
    <iframe width="100%" height="390" frameborder="no" scrolling="no" seamless src="https://share.transistor.fm/e/indie-worldwide/playlist"></iframe>
  </section>
)

export default PodcastEmbed
