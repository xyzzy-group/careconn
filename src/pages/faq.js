import * as React from "react";
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
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: "300",
  fontSize: "24px",
  maxWidth: "560px",
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: "16px",
  verticalAlign: "5%",
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
};

const descriptionStyle = {
  color: "#232129",
  fontSize: "14px",
};

const docLink = {
  text: "Things you may consider asking",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
};
// data
const links = [
  {
    text: "How long has Care Connection been in business?",
    url: "",
    description:
      "We were founded in 1958 and did business in Philadelphia as Northeast Psychological Clinic until 1990, when we changed our name to Care Connection. We have been providing psychological counseling services during all of that time.",
    color: "#E95800",
  },
  {
    text: "Do we prescribe medications?",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Yes, if needed as part of your therapy, our on-site psychiatrist or psychiatric nurse practictioner can prescribe medications and follow-up with you to track their effectiveness.",
    color: "#1099A8",
  },
  {
    text: "Do you take insurance?",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Yes, we accept most insurance and Medicare. We also have many clients who pay directly without using insurance benefits.",
    color: "#BC027F",
  },
  {
    text: "How do I get an appointment?",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Call us at 215-331-3200 to speak to our staff, who will connect you with an appropriate therapist. You can then set up a time and location which will fit your needs.",
    color: "#0D96F2",
  },
  {
    text: "How does counseling work?",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "In most cases you will meet with a therapist individually and establish trust with them so that you feel free to discuss the changes and goals you would like to achieve in your life..",
    color: "#000000",
  },
  {
    text: "How often do you meet?",
    description:
      "That will be decided in consultation with your therapist, but often there will be weekly meetings at the beginning of the process and then tapering to a bi-weekly or monthly schedule will be more appropriate. In some cases, just a few meetings or “brief therapy” works well for specific problems."
  },
];

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <NavBar title="FAQ"/>
      <h1 style={headingStyles}>
        <span style={headingAccentStyles}>Frequenty Asked Questions</span>
      </h1>
      <ul style={listStyles}>
        {links.map((link) => (
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
  );
};

export default IndexPage;
