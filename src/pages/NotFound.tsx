import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowIcon } from "../components/ui";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page not found · The Feather n' Knife";
  }, []);

  return (
    <section className="page-hero not-found">
      <div className="page-width">
        <p className="eyebrow eyebrow--dark">404</p>
        <h1 className="page-title">
          This page
          <br />
          <em>wandered off.</em>
        </h1>
        <p className="page-lead">The link may be old. The studio is still here. Try one of these doors.</p>
        <div className="not-found__links">
          <Link className="button button--ink" to="/">
            Back home <ArrowIcon />
          </Link>
          <Link className="text-link text-link--dark" to="/blog">
            Read the blog <ArrowIcon />
          </Link>
          <Link className="text-link text-link--dark" to="/contact">
            Contact the studio <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
