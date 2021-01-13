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
  marginBottom: 16,
  textAlign: 'center',
}
const headingAccentStyles = {
  color: "#663399",
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: "300",
  fontSize: "24px",
  maxWidth: "560px",
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: "16px",
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: "14px",
}

const docLink = {
  text: "We’re Here to Help You With",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}
// data
const links = [
  {
    text: "First Location",
    url: "",
    description:"2200 Michener Street\nSuite 20\nPhiladelphia, PA 19115\n(267) 544-1825",
    color: "#E95800",
  },
  {
    text: "Second Location",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "1 Oxford Valley\nSuite 812\nLanghorne, PA 19047\n(267) 544-1825",
    color: "#1099A8",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <NavBar title="Locations"/>
      <h1 style={headingStyles}>
        <span style={headingAccentStyles}>Locations</span>
      </h1>
      <ul style={listStyles}>
        {links.map(link => (
          <li style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
      <Footer />
    </main>
  )
}

export default IndexPage
