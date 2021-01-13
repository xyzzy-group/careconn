import * as React from "react"
import NavBar from "../partials/navbar";
import Footer from "../partials/footer";
require('../styles/global.css')

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  marginLeft: 'auto',
  marginRight: 'auto'
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 12,
  textAlign: 'center',
}
const headingAccentStyles = {
  color: "#663399",
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <NavBar title="Home Page" />
      <h1 style={headingStyles}>
        <span style={headingAccentStyles}>Home Page</span>
      </h1>
      <ul>
      <div className="home-contain">
        <section className="banner">YOUR PATH TO WELLNESS</section>
      </div>
      <div className="service-contain">

      </div>

      </ul>
      <Footer />
    </main>
  )
}

export default IndexPage
