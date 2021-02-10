import * as React from "react";
import { Link } from "gatsby";
import SEO from "../components/SEO";

// markup
const NotFoundPage = () => {
  return (
    <div className="text-center">
      <SEO title="404" />
      <h1 className="text-4xl text-secondary  mb-16">404 | Page not found</h1>
      <p className="text-xl mb-8">
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
      </p>
      <Link to="/" className="text-xl text-secondary hover:underline">
        Go home
      </Link>
    </div>
  );
};

export default NotFoundPage;
