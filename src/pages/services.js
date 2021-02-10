import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import SEO from "../components/SEO";

const ServicesQuery = graphql`
  query Services {
    allServicesJson {
      nodes {
        description
        text
        url
        id
      }
    }
  }
`;

const ServicesPage = () => {
  const data = useStaticQuery(ServicesQuery);

  return (
    <div>
      <SEO title="Services" />
      <h1 className="text-4xl text-secondary text-center mb-10">Services</h1>
      <p className="mb-4">We are here to help you with:</p>
      <ul>
        {data.allServicesJson.nodes.map((service) => (
          <li key={service.id} className="mb-4">
            <a href={service.url ?? "#"} className="font-bold text-secondary">
              {service.text}
            </a>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesPage;
