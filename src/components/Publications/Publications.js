import React, { useState } from "react";
import "./Publications.css";
import { PUBLICATIONS } from "../../Util/data";
import { trackOutboundLink } from "../../Util/analytics";

const GROUP_BY_OPTIONS = [
  { value: "selected", label: "Selected" },
  { value: "focus", label: "Research Focus" },
  { value: "type", label: "Publication Type" },
  { value: "year", label: "Year" },
];

const FOCUS_ORDER = [
  "High-Assurance AI",
  "Healthcare AI",
  "Knowledge Graphs",
  "Data Integration",
  "Large Language Models",
  "Generative AI",
  "Graph Analytics",
];

const TYPE_OPTIONS = [
  { value: "paper-conference", label: "Conference Papers", icon: "fas fa-university" },
  { value: "article-journal", label: "Journal Articles", icon: "fas fa-book-open" },
  { value: "article", label: "Preprints", icon: "fas fa-file-alt" },
];

const GROUP_ICONS = {
  selected: "fas fa-star",
  all: "fas fa-list",
  "High-Assurance AI": "fas fa-shield-alt",
  "Healthcare AI": "fas fa-heartbeat",
  "Knowledge Graphs": "fas fa-project-diagram",
  "Data Integration": "fas fa-code-branch",
  "Large Language Models": "fas fa-robot",
  "Generative AI": "fas fa-magic",
  "Graph Analytics": "fas fa-chart-line",
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
      papers: PUBLICATIONS.filter((paper) => paper.researchFocus === focus),
    })).filter((group) => group.papers.length > 0);
  }

  if (groupBy === "type") {
    return TYPE_OPTIONS.map((type) => ({
      ...type,
      papers: PUBLICATIONS.filter((paper) => paper.publicationType === type.value),
    })).filter((group) => group.papers.length > 0);
  }

  return Array.from(new Set(PUBLICATIONS.map((paper) => new Date(paper.date).getFullYear())))
    .sort((left, right) => right - left)
    .map((year) => ({
      value: String(year),
      label: String(year),
      icon: "fas fa-calendar-alt",
      papers: PUBLICATIONS.filter((paper) => new Date(paper.date).getFullYear() === year),
    }));
};

const Publications = () => {
  const [groupBy, setGroupBy] = useState("selected");
  const [activeGroup, setActiveGroup] = useState("selected");
  const groups = getGroups(groupBy);
  const selectedGroup = groups.find((group) => group.value === activeGroup) || groups[0];
  const papers = sortResearch(selectedGroup.papers, groupBy, selectedGroup.value);

  const changeGrouping = (event) => {
    const nextGrouping = event.target.value;
    const nextGroups = getGroups(nextGrouping);

    setGroupBy(nextGrouping);
    setActiveGroup(nextGroups[0].value);
  };

  return (
    <section id="publications" aria-labelledby="research-heading">
      <h1 id="research-heading">Research</h1>
      <div className="research-grouping">
        <label htmlFor="research-group-by">Group by</label>
        <select id="research-group-by" value={groupBy} onChange={changeGrouping}>
          {GROUP_BY_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="research-tabs" role="tablist" aria-label={`Research grouped by ${groupBy}`}>
        {groups.map((group) => (
          <button
            key={group.value}
            type="button"
            role="tab"
            aria-selected={selectedGroup.value === group.value}
            className={`research-tab ${selectedGroup.value === group.value ? "is-active" : ""}`}
            onClick={() => setActiveGroup(group.value)}
          >
            <i className={group.icon} aria-hidden="true" />
            <span>{group.label}</span>
            <span className="research-tab-count">({group.papers.length})</span>
          </button>
        ))}
      </div>

      {groupBy === "selected" && selectedGroup.value === "selected" ? (
        <p className="research-intro">
          A focused set of projects spanning high-assurance LLM reasoning, knowledge graphs, data integration, and healthcare AI.
        </p>
      ) : null}

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
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Publications;
