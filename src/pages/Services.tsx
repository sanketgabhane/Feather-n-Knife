import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowIcon, CtaBand } from "../components/ui";
import { services } from "../data";

export default function Services() {
  useEffect(() => {
    document.title = "What we do · The Feather n' Knife";
  }, []);

  return (
    <>
      <section className="page-hero">
        <div className="page-width">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">What we do</span>
          </nav>
          <p className="eyebrow eyebrow--dark">Services</p>
          <h1 className="page-title">
            Four ways we
            <br />
            <em>make a brand felt.</em>
          </h1>
          <p className="page-lead">
            Identity, social, campaigns and the people behind the company. Pick a door, or
            start with a conversation and we'll tell you which one actually matters.
          </p>
        </div>
      </section>
      <section className="service-index">
        <div className="page-width service-index__list">
          {services.map((service) => (
            <Link className="service-index__card" to={`/services/${service.slug}`} key={service.slug}>
              <img src={service.image} alt={service.imageAlt} />
              <div>
                <span>{service.number}</span>
                <h2>{service.title}</h2>
                <p>{service.short}</p>
                <em>
                  Open this page <ArrowIcon diagonal />
                </em>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
