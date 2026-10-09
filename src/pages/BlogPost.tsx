import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowIcon } from "../components/ui";
import { adjacentPost, getPost } from "../data";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);

  useEffect(() => {
    if (post) document.title = `${post.title} · The Feather n' Knife`;
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  const { prev, next } = adjacentPost(post.slug);

  return (
    <article>
      <header className="page-hero page-hero--article">
        <div className="page-width page-hero--narrow">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/blog">Blog</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{post.category}</span>
          </nav>
          <p className="eyebrow eyebrow--dark">
            {post.category} · {post.date} · {post.read}
          </p>
          <h1 className="page-title">{post.title}</h1>
          <p className="page-lead">{post.excerpt}</p>
        </div>
      </header>
      <figure className="article-hero">
        <img src={post.image} alt={post.imageAlt} />
      </figure>
      <div className="article">
        {post.blocks.map((block) => (
          <section key={block.text.slice(0, 24)}>
            {block.heading ? <h2>{block.heading}</h2> : null}
            <p>{block.text}</p>
          </section>
        ))}
        <p className="article__sign">
          Written in the studio, Pune. If this sounds like your brand's missing piece,{" "}
          <Link to="/contact">come and talk</Link>.
        </p>
      </div>
      <nav className="post-nav page-width" aria-label="More notes">
        <Link to={`/blog/${prev.slug}`}>
          <span>Previous</span>
          <strong>{prev.title}</strong>
        </Link>
        <Link to={`/blog/${next.slug}`}>
          <span>Next</span>
          <strong>
            {next.title} <ArrowIcon />
          </strong>
        </Link>
      </nav>
    </article>
  );
}
