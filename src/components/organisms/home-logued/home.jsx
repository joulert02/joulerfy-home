import { Link } from "gatsby"
import React from "react"
import "./home.scss"

const Home = () => {
  return (
    <section id="homeContainer-logued">
      <section id="primary">
        <h1>Wolcome to JoulerFy</h1>
        <br />
        <p>The best Aplication to listen music.</p>

        <Link to="/playlist">go to Playlist</Link>
      </section>
    </section>
  )
}

export default Home
