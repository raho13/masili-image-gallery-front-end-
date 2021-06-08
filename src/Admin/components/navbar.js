import React from "react";
import {
  Link,
  useRouteMatch,
} from "react-router-dom";
export default function Navbar() {
  const { url } = useRouteMatch();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        salam Admin...
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to={`${url}/add`}>
            Add post
          </Link>
          <Link className="nav-item nav-link" to={`${url}/gallery`}>
            Gallery
          </Link>
        </div>
      </div>
    </nav>
  );
}
