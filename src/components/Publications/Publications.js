import React, { useState } from "react";
import "./Publications.css";
import { PUBLICATIONS } from "../../Util/data";
import { trackOutboundLink } from "../../Util/analytics";

const GROUP_BY_OPTIONS = [
  { value: "selected", label: "Selected" },
  { value: "type", label: "Publication Type" },
  { value: "focus", label: "Research Focus" },
  { value: "domain", label: "Domain" },
  { value: "contribution", label: "Contribution" },
];

const FOCUS_ORDER = [
  "AI in High-Assurance Domains",
  "AI Reasoning",
  "Knowledge Graphs & Networks",
  "Entity Resolution",
  "Computational Social Science",
];

const TYPE_OPTIONS = [
  { value: "paper-conference", label: "Conference Papers", icon: "fas fa-university" },
  { value: "article-journal", label: "Journal Articles", icon: "fas fa-book-open" },
  { value: "article", label: "Preprints", icon: "fas fa-file-alt" },
];

const DOMAIN_OPTIONS = [
  { value: "AI in Healthcare", icon: "fas fa-heartbeat" },
  { value: "Knowledge Graphs", icon: "fas fa-project-diagram" },
  { value: "Entity Resolution", icon: "fas fa-code-branch" },
  { value: "Large Language Models", icon: "fas fa-robot" },
  { value: "Network Science", icon: "fas fa-chart-line" },
];

const CONTRIBUTION_OPTIONS = [
  { value: "Modeling", icon: "fas fa-brain" },
  { value: "Evaluation", icon: "fas fa-chart-line" },
  { value: "Dataset", icon: "fas fa-database" },
  { value: "System", icon: "fas fa-cogs" },
];

const GROUP_ICONS = {
  selected: "fas fa-star",
  all: "fas fa-list",
  "AI in High-Assurance Domains": "fas fa-shield-alt",
  "AI Reasoning": "fas fa-brain",
  "Knowledge Graphs & Networks": "fas fa-project-diagram",
  "Entity Resolution": "fas fa-code-branch",
  "Computational Social Science": "fas fa-chart-line",
  "AI in Healthcare": "fas fa-heartbeat",
  "Knowledge Graphs": "fas fa-project-diagram",
  "Large Language Models": "fas fa-robot",
  "Network Science": "fas fa-chart-line",
  Modeling: "fas fa-brain",
  Evaluation: "fas fa-chart-line",
  Dataset: "fas fa-database",
  System: "fas fa-cogs",
};

const extraLinkLabels = {
  news: "Media coverage",
  article: "Related article",
};

const extraLinkIcons = {
  news: "fas fa-newspaper",
  article: "fas fa-external-link-alt",
};

const formatAuthors = (authors) =>
  authors.split(/,\s*/).map((author, index, array) => {
    const isCurrentAuthor = author.includes("Nananukul");
    const hasFollowingAuthor = index !== array.length - 1;

    return (
      <React.Fragment key={`${author}-${index}`}>
        <span className={isCurrentAuthor ? "current-author" : ""}>{author}</span>
        {hasFollowingAuthor ? ", " : ""}
      </React.Fragment>
    );
  });

const sortResearch = (papers, groupBy, activeGroup) =>
  [...papers].sort((left, right) => {
    if (groupBy === "selected" && activeGroup === "selected") {
      return left.selectedRank - right.selectedRank;
    }

    const dateDifference = new Date(right.date) - new Date(left.date);
    return dateDifference || left.id - right.id;
  });

const getGroups = (groupBy) => {
  if (groupBy === "selected") {
    const selectedPapers = PUBLICATIONS.filter((paper) => paper.selectedRank);

    return [
      { value: "selected", label: "Selected", icon: GROUP_ICONS.selected, papers: selectedPapers },
      { value: "all", label: "All research papers", icon: GROUP_ICONS.all, papers: PUBLICATIONS },
    ];
  }

  if (groupBy === "focus") {
    return FOCUS_ORDER.map((focus) => ({
      value: focus,
      label: focus,
      icon: GROUP_ICONS[focus],
      papers: PUBLICATIONS.filter((paper) => (paper.researchFocuses || []).includes(focus)),
    })).filter((group) => group.papers.length > 0);
  }

  if (groupBy === "type") {
    return TYPE_OPTIONS.map((type) => ({
      ...type,
      papers: PUBLICATIONS.filter((paper) => paper.publicationType === type.value),
    })).filter((group) => group.papers.length > 0);
  }

  if (groupBy === "domain") {
    return DOMAIN_OPTIONS.map((domain) => ({
      ...domain,
      label: domain.value,
      papers: PUBLICATIONS.filter((paper) => (paper.domains || []).includes(domain.value)),
    })).filter((group) => group.papers.length > 0);
  }

  return CONTRIBUTION_OPTIONS.map((contribution) => ({
    ...contribution,
    label: contribution.value,
    papers: PUBLICATIONS.filter((paper) => (paper.contributions || []).includes(contribution.value)),
  })).filter((group) => group.papers.length > 0);
};

const Publications = () => {
  const [groupBy, setGroupBy] = useState("selected");
  const [activeGroup, setActiveGroup] = useState("selected");
  const [isGroupMenuOpen, setIsGroupMenuOpen] = useState(false);
  const [previewGroupBy, setPreviewGroupBy] = useState(null);
  const displayedGroupBy = previewGroupBy || groupBy;
  const groups = getGroups(displayedGroupBy);
  const selectedGroup =
    displayedGroupBy === groupBy
      ? groups.find((group) => group.value === activeGroup) || groups[0]
      : groups[0];
  const papers = sortResearch(selectedGroup.papers, displayedGroupBy, selectedGroup.value);
  const activeGrouping = GROUP_BY_OPTIONS.find((option) => option.value === groupBy);

  const changeGrouping = (nextGrouping) => {
    const nextGroups = getGroups(nextGrouping);

    setGroupBy(nextGrouping);
    setActiveGroup(nextGroups[0].value);
    setIsGroupMenuOpen(false);
    setPreviewGroupBy(null);
  };

  return (
    <section id="publications" aria-labelledby="research-heading">
      <h1 id="research-heading">Research</h1>
      <div className={`research-grouping ${isGroupMenuOpen ? "is-open" : ""}`}>
        <span className="research-group-label">Group by</span>
        <button
          type="button"
          className="research-group-trigger"
          aria-expanded={isGroupMenuOpen}
          aria-controls="research-group-options"
          onClick={() => {
            setIsGroupMenuOpen((isOpen) => !isOpen);
            setPreviewGroupBy(null);
          }}
        >
          <span>{activeGrouping.label}</span>
          <span aria-hidden="true">{isGroupMenuOpen ? "<" : ">"}</span>
        </button>
        <div
          id="research-group-options"
          className="research-group-options"
          onMouseLeave={() => setPreviewGroupBy(null)}
        >
          {GROUP_BY_OPTIONS.filter((option) => option.value !== groupBy).map((option) => (
            <button
              key={option.value}
              type="button"
              className={option.value === groupBy ? "is-active" : ""}
              onClick={() => changeGrouping(option.value)}
              onMouseEnter={() => setPreviewGroupBy(option.value)}
              onFocus={() => setPreviewGroupBy(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="research-tabs" role="tablist" aria-label={`Research grouped by ${displayedGroupBy}`}>
        {groups.map((group) => (
          <button
            key={group.value}
            type="button"
            role="tab"
            aria-selected={selectedGroup.value === group.value}
            className={`research-tab ${selectedGroup.value === group.value ? "is-active" : ""}`}
            onClick={() => {
              if (!previewGroupBy) setActiveGroup(group.value);
            }}
          >
            <i className={group.icon} aria-hidden="true" />
            <span>{group.label}</span>
            <span className="research-tab-count">({group.papers.length})</span>
          </button>
        ))}
      </div>

      <div className="research-list">
        {papers.map((paper) => {
          const links = [
            paper.link && { label: "Paper", icon: "fas fa-link", url: paper.link, category: "research-paper" },
            ...(paper.extraLinks || []).map((link) => ({
              label: extraLinkLabels[link.type] || "Related link",
              icon: extraLinkIcons[link.type] || "fas fa-external-link-alt",
              url: link.url,
              category: "research-coverage",
            })),
            paper.code && { label: "Code", icon: "fas fa-code", url: paper.code, category: "research-code" },
            paper.projectPage && {
              label: "Project page",
              icon: "fas fa-globe",
              url: paper.projectPage,
              category: "research-project",
            },
          ].filter(Boolean);

          return (
            <article key={paper.id} className="research-entry">
              <div className="research-image-wrap">
                {paper.image ? (
                  <img src={paper.image} alt={paper.name} className="research-image" />
                ) : (
                  <div className="research-image-fallback" aria-hidden="true">
                    {new Date(paper.date).getFullYear()}
                  </div>
                )}
              </div>
              <div className="research-entry-content">
                {paper.link ? (
                  <a
                    className="research-title-link"
                    href={paper.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    onClick={() => trackOutboundLink(paper.name, paper.link, "research-paper")}
                  >
                    <h2>{paper.name}</h2>
                  </a>
                ) : (
                  <h2>{paper.name}</h2>
                )}
                <p className="research-authors">{formatAuthors(paper.authors)}</p>
                <p className="research-venue">{paper.journal}</p>
                <div className="research-links" aria-label={`Links for ${paper.name}`}>
                  {links.map((link, index) => (
                    <React.Fragment key={link.url}>
                      <a
                        href={link.url}
                        rel="noopener noreferrer"
                        target="_blank"
                        onClick={() => trackOutboundLink(paper.name, link.url, link.category)}
                      >
                        <i className={link.icon} aria-hidden="true" />
                        {link.label}
                      </a>
                      {index < links.length - 1 ? <span aria-hidden="true">/</span> : null}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Publications;
