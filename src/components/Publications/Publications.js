import React, { useState } from "react";
import "./Publications.css";
import { PUBLICATIONS, RESEARCH_INTERESTS } from "../../Util/data";

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

const TAG_ORDER = [
  "Neurosymbolic AI",
  "AI in Healthcare",
  "Knowledge Graphs",
  "Entity Resolution",
  "Large Language Models",
  "Computational Social Science",
];

const compareTags = (left, right) => {
  const leftIndex = TAG_ORDER.indexOf(left);
  const rightIndex = TAG_ORDER.indexOf(right);

  if (leftIndex !== -1 && rightIndex !== -1) return leftIndex - rightIndex;
  if (leftIndex !== -1) return -1;
  if (rightIndex !== -1) return 1;

  const researchLeft = RESEARCH_INTERESTS.indexOf(left);
  const researchRight = RESEARCH_INTERESTS.indexOf(right);

  if (researchLeft !== -1 && researchRight !== -1) return researchLeft - researchRight;
  if (researchLeft !== -1) return -1;
  if (researchRight !== -1) return 1;

  return left.localeCompare(right);
};

const Publications = () => {
  const [activeTag, setActiveTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [publicationType, setPublicationType] = useState("All");
  const [publicationYear, setPublicationYear] = useState("All");

  const allTags = [
    "All",
    ...Array.from(new Set(PUBLICATIONS.flatMap((pub) => pub.tags || []))).sort(compareTags),
  ];
  const allYears = ["All", ...Array.from(new Set(PUBLICATIONS.map((pub) => String(new Date(pub.date).getFullYear())))).sort((a, b) => Number(b) - Number(a))];
  const typeOptions = [
    { value: "All", label: "Type" },
    { value: "paper-conference", label: "Conference paper" },
    { value: "article-journal", label: "Journal article" },
    { value: "article", label: "Preprint" },
  ];

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredPublications = PUBLICATIONS
    .filter((pub) => {
      const matchesTag = activeTag === "All" || (pub.tags || []).includes(activeTag);
      const matchesType = publicationType === "All" || pub.publicationType === publicationType;
      const matchesYear = publicationYear === "All" || String(new Date(pub.date).getFullYear()) === publicationYear;
      const searchSource = [pub.name, pub.journal, pub.authors, ...(pub.tags || [])].join(" ").toLowerCase();
      const matchesSearch = !normalizedQuery || searchSource.includes(normalizedQuery);

      return matchesTag && matchesType && matchesYear && matchesSearch;
    })
    .sort((left, right) => {
      const dateDiff = new Date(right.date) - new Date(left.date);

      if (dateDiff !== 0) return dateDiff;

      return left.id - right.id;
    });

  return (
    <section id="publications">
      <h1>Publications</h1>
      <div className="publication-filter-group" role="group" aria-label="Filter publications by topic">
        {allTags.map((tag) => (
          <button
            key={tag}
            type="button"
            className={`publication-filter-chip ${activeTag === tag ? "is-active" : ""}`}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="publication-toolbar">
        <input
          type="search"
          className="publication-search"
          placeholder="Search publications..."
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          aria-label="Search publications"
        />
        <select
          className="publication-select"
          value={publicationType}
          onChange={(event) => setPublicationType(event.target.value)}
          aria-label="Filter by publication type"
        >
          {typeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <select
          className="publication-select"
          value={publicationYear}
          onChange={(event) => setPublicationYear(event.target.value)}
          aria-label="Filter by year"
        >
          {allYears.map((year) => (
            <option key={year} value={year}>
              {year === "All" ? "Year" : year}
            </option>
          ))}
        </select>
      </div>
      <div className="publications-grid">
        {filteredPublications.map((pub) => (
          <article key={pub.id} className={`publication-entry ${pub.image ? "" : "no-image"}`}>
            {pub.image ? (
              <img src={pub.image} alt={pub.name} className="publication-image" />
            ) : (
              <div className="publication-visual">
                <span>{new Date(pub.date).getFullYear()}</span>
              </div>
            )}
            <div className="publication-content">
              {pub.link ? (
                <a href={pub.link} rel="noopener noreferrer" target="_blank" className="publication-title-link">
                  <h2>{pub.name}</h2>
                </a>
              ) : (
                <h2>{pub.name}</h2>
              )}
              <p className="publication-date">{formatDate(pub.date)}</p>
              <p className="publication-venue">{pub.journal}</p>
              <p className="publication-authors">{formatAuthors(pub.authors)}</p>
              {pub.tags && pub.tags.length > 0 && (
                <div className="publication-tags">
                  {pub.tags.map((tag) => (
                    <span key={`${pub.id}-${tag}`} className="publication-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <div className="publication-links">
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
      {filteredPublications.length === 0 && (
        <p className="publication-empty">No publications match the current filters.</p>
      )}
    </section>
  );
};

export default Publications;
