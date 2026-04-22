import React from "react";
import "./FeaturedPublications.css";
import { FEATUREDPUBLICATIONS } from "../../Util/data";

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "short" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
};

const formatAuthors = (authors) =>
  authors.split(/,\s*/).map((author, index, array) => {
    const isBold = author.includes("Nananukul");
    const needsComma = index !== array.length - 1;

    return (
      <span key={`${author}-${index}`} className={isBold ? "current-author" : ""}>
        {author}
        {needsComma ? ", " : ""}
      </span>
    );
  });

const extraLinkIcon = {
  news: "fas fa-newspaper",
  article: "fas fa-external-link-alt",
};

const FeaturedPublications = () => {
  return (
    <section id="featured-publications">
      <h1>Featured Publications</h1>
      <div className="featured-publications-grid">
        {FEATUREDPUBLICATIONS.map((pub) => (
          <article key={pub.id} className={`featured-publication-entry ${pub.image ? "" : "no-image"}`}>
            {pub.image ? (
              <img src={pub.image} alt={pub.name} className="featured-publication-image" />
            ) : (
              <div className="featured-publication-visual">
                <span>Featured</span>
              </div>
            )}
            <div className="featured-publication-content">
              {pub.link ? (
                <a
                  href={pub.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="featured-publication-title-link"
                >
                  <h2>{pub.name}</h2>
                </a>
              ) : (
                <h2>{pub.name}</h2>
              )}
              <p className="featured-publication-date">{formatDate(pub.date)}</p>
              <p className="featured-publication-venue">{pub.journal}</p>
              <p className="featured-publication-authors">{formatAuthors(pub.authors)}</p>
              {pub.description && <p className="featured-publication-description">{pub.description}</p>}
              <div className="featured-publication-links">
                {pub.link && (
                  <a href={pub.link} rel="noopener noreferrer" target="_blank">
                    <i className="fas fa-file-alt"></i>
                  </a>
                )}
                {pub.extraLinks &&
                  pub.extraLinks.map((extraLink) => (
                    <a key={extraLink.url} href={extraLink.url} rel="noopener noreferrer" target="_blank">
                      <i className={extraLinkIcon[extraLink.type] || "fas fa-link"}></i>
                    </a>
                  ))}
                {pub.code && (
                  <a href={pub.code} rel="noopener noreferrer" target="_blank">
                    <i className="fas fa-code"></i>
                  </a>
                )}
                {pub.projectPage && (
                  <a href={pub.projectPage} rel="noopener noreferrer" target="_blank">
                    <i className="fas fa-globe"></i>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPublications;
