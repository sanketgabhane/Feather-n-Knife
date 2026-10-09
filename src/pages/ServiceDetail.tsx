import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowIcon, CtaBand } from "../components/ui";
import { getService, services } from "../data";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);

  useEffect(() => {
    if (service) document.title = `${service.title} · The Feather n' Knife`;
  }, [service]);

  if (!service) return <Navigate to="/services" replace />;

  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <section className="page-hero page-hero--split">
        <div className="page-width page-hero__split">
          <div>
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link to="/services">What we do</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{service.title}</span>
            </nav>
            <p className="eyebrow eyebrow--dark">Service {service.number}</p>
            <h1 className="page-title">{service.title}</h1>
            <p className="page-lead">{service.lead}</p>
            <Link className="button button--ink" to="/contact">
              Start with this <ArrowIcon diagonal />
            </Link>
          </div>
          <img src={service.image} alt={service.imageAlt} />
        </div>
      </section>

      <section className="detail-grid">
        <div className="page-width detail-grid__inner">
          <div>
            <p className="eyebrow eyebrow--dark">What's included</p>
            <ul className="tick-list">
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="step-list">
            {service.steps.map((step, index) => (
              <article key={step.title}>
                <span>0{index + 1}</span>
                <h2>{step.title}</h2>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="related">
        <div className="page-width">
          <p className="eyebrow eyebrow--dark">Also on the table</p>
          <div className="related__row">
            {others.map((item) => (
              <Link key={item.slug} to={`/services/${item.slug}`}>
                <span>{item.number}</span>
                <strong>{item.title}</strong>
                <ArrowIcon />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
