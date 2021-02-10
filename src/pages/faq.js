import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import SEO from "../components/SEO";

const FaqQuery = graphql`
  query Faq {
    allFaqJson {
      nodes {
        description
        text
        url
        id
      }
    }
  }
`;

const FAQPage = () => {
  const data = useStaticQuery(FaqQuery);

  return (
    <div>
      <SEO title="FAQ" />
      <h1 className="text-4xl text-secondary text-center mb-10">Frequenty Asked Questions</h1>
      <ul>
        {data.allFaqJson.nodes.map((faq) => (
          <li key={faq.id} className="mb-4">
            <a href={faq.url ?? "#"} className="font-bold text-secondary">
              {faq.text}
            </a>
            <p>{faq.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQPage;
