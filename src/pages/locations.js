import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import SEO from "../components/SEO";

const LocationsQuery = graphql`
  query Locations {
    allLocationsJson {
      nodes {
        description
        text
        url
        id
      }
    }
  }
`;

const MAP_URL = `https://www.google.com/maps/d/embed?mid=1XUDR7uKADIVHYrTav5dnZzr8saJXp6Fr&z=11`;

const LocationsPage = () => {
  const data = useStaticQuery(LocationsQuery);

  return (
    <div>
      <SEO title="Locations" />
      <h1 className="text-4xl text-secondary text-center mb-10">Locations</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 mb-5">
        {data.allLocationsJson.nodes.map((location) => (
          <li key={location.id} className="mb-5 sm:place-self-center">
            <a href={location.url ?? "#"} className="font-bold text-primary">
              {location.text}
            </a>
            <pre className="font-sans">{location.description}</pre>
          </li>
        ))}
      </ul>
      <iframe className="w-full" src={MAP_URL} height="480" />
    </div>
  );
};

export default LocationsPage;
