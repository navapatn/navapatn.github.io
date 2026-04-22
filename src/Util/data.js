const publicUrl = process.env.PUBLIC_URL || "";
const mediaUrl = `${publicUrl}/media`;
const orgUrl = `${publicUrl}/orgs`;

const publicationImage = (fileName) => `${mediaUrl}/publications/${fileName}`;

export const FULL_NAME = "Navapat Nananukul";
export const PROFILE_IMAGE = `${mediaUrl}/authors/me.png`;
export const PROFILE_HOVER_IMAGE = `${mediaUrl}/authors/me.jpg`;
export const LANDING_SUBTITLE = "Ph.D. Student / Research Assistant @ USC Information Sciences Institute";
export const LANDING_DESCRIPTION = "";
export const RESUME_LINK = `${publicUrl}/files/Navapat_s_CV_2026.pdf`;

export const FOOTER_TEXT = {
  text: "",
  link: "",
  linkText: "",
};

export const RESEARCH_INTERESTS = [
  "Neurosymbolic AI",
  "AI in Healthcare",
  "Knowledge Graphs",
  "Entity Resolution",
  "Large Language Models",
  "Computational Social Science",
];

export const SOCIAL_LINKS = [
  {
    name: "Email",
    icon: "email",
    link: "mailto:nananuku@usc.edu",
    text: "nananuku@usc.edu",
    showText: true,
  },
  {
    name: "Google Scholar",
    icon: "scholar",
    link: "https://scholar.google.com/citations?user=h_YWvdAAAAAJ&hl=en",
    showText: false,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/navapatn",
    showText: false,
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/navapatn",
    showText: false,
  },
  {
    name: "CV",
    icon: "cv",
    link: `${publicUrl}/files/Navapat_s_CV_2026.pdf`,
    showText: false,
  },
];

export const NEWS = [
  {
    date: "May 2026",
    content: "💼 I am joining <strong>GRAIL AI</strong> as a research scientist intern!",
  },
  {
    date: "Apr 2026",
    content:
      "🎉 Our new demonstration paper <strong>ClinicBot</strong> is accepted at the <strong>ACM Conference on AI and Agentic Systems (CAIS 2026)</strong>!",
  },
  {
    date: "Apr 2026",
    content:
      "📄 <strong>LOGicalThought</strong> is available as an <a href='https://arxiv.org/abs/2510.01530' target='_blank' rel='noopener noreferrer'>arXiv preprint</a>, introducing a neurosymbolic method for high-assurance reasoning over long-form rules and regulations.",
  },
  {
    date: "Aug 2025",
    content:
      "🎓 I began my Ph.D. study at the <strong>University of Southern California</strong>.",
  },
  {
    date: "May 2025",
    content:
      "🎉 Our <a href='https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2834525' target='_blank' rel='noopener noreferrer'>JAMA Network Open paper</a> on physician practice locations was featured alongside <a href='https://jamanetwork.altmetric.com/details/177474306/news' target='_blank' rel='noopener noreferrer'>media coverage</a> and an <a href='https://www.isi.edu/news/76579/where-doctors-go-using-data-to-map-where-physicians-start-their-careers/' target='_blank' rel='noopener noreferrer'>ISI article</a>.",
  },
];

export const FEATUREDPUBLICATIONS = [
  {
    id: 1,
    name: "LOGicalThought: Logic-Based Ontological Grounding of LLMs for High-Assurance Reasoning",
    journal: "Under review at ICML 2026 · arXiv preprint",
    date: "2026-04-01",
    authors: "N.Nananukul, Y.Zhang, R.Lee, E.Boxer, J.May, V.G.Gogate, J.Pujara, et al.",
    link: "https://arxiv.org/abs/2510.01530",
    image: publicationImage("ICML-approach-4.png"),
    description:
      "A neurosymbolic approach that grounds LLM reasoning in symbolic graph and logic-based contexts for verifiable decision making.",
  },
  {
    id: 2,
    name: "HealthEQKG: A Knowledge Graph and Data Model for Health Equity Research",
    journal: "ISWC 2025",
    date: "2025-01-01",
    authors: "N.Nananukul, M.Kejriwal",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=h_YWvdAAAAAJ&citation_for_view=h_YWvdAAAAAJ:ufrVoPGSRksC",
    image: publicationImage("healtheqkg.png"),
    description:
      "An open-source health equity knowledge graph that supports natural-language-driven research workflows for non-coders.",
  },
  {
    id: 3,
    name: "Medical school ranking and neighborhood characteristics of initial practice location among physicians",
    journal: "JAMA Network Open 2025",
    date: "2025-01-01",
    authors: "N.Nananukul, M.Kejriwal",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=h_YWvdAAAAAJ&citation_for_view=h_YWvdAAAAAJ:W7OEmFMy1HYC",
    image: publicationImage("jama.png"),
    description:
      "A data-driven study of physician practice locations that connects medical school rank with neighborhood-level characteristics.",
    extraLinks: [
      { type: "news", url: "https://jamanetwork.altmetric.com/details/177474306/news" },
      { type: "article", url: "https://www.isi.edu/news/76579/where-doctors-go-using-data-to-map-where-physicians-start-their-careers/" },
    ],
  },
  {
    id: 4,
    name: "Semi-Automatic Extraction and Analysis of Health Equity Covariates in Registered Research Projects",
    journal: "Applied Sciences 2025",
    date: "2025-01-01",
    authors: "N.Nananukul, M.Kejriwal",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=h_YWvdAAAAAJ&citation_for_view=h_YWvdAAAAAJ:_FxGoFyzp5QC",
    image: publicationImage("all-of-us-v3.png"),
    description:
      "A workflow for extracting and analyzing health equity variables from registered research projects at scale.",
  },
];

export const PUBLICATIONS = [
  {
    id: 1,
    name: "An Analysis of Artificial Intelligence Adoption in NIH-Funded Research",
    journal: "Under review at ICDH 2026 · arXiv preprint",
    date: "2026-01-02",
    authors: "N.Nananukul, M.Kejriwal",
    link: "https://arxiv.org/pdf/2604.07424",
    image: publicationImage("ICDH-collaboration-network.png"),
    tags: ["AI in Healthcare", "Computational Social Science"],
    publicationType: "article",
  },
  {
    id: 2,
    name: "LOGicalThought: Logic-Based Ontological Grounding of LLMs for High-Assurance Reasoning",
    journal: "Under review at ICML 2026 · arXiv preprint",
    date: "2026-04-01",
    authors: "N.Nananukul, Y.Zhang, R.Lee, E.Boxer, J.May, V.G.Gogate, J.Pujara, et al.",
    link: "https://arxiv.org/abs/2510.01530",
    image: publicationImage("ICML-approach-4.png"),
    tags: ["Neurosymbolic AI", "Large Language Models", "Trustworthy AI"],
    publicationType: "article",
  },
  {
    id: 3,
    name: "HealthEQKG: A Knowledge Graph and Data Model for Health Equity Research",
    journal: "ISWC 2025",
    date: "2025-01-01",
    authors: "N.Nananukul, M.Kejriwal",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=h_YWvdAAAAAJ&citation_for_view=h_YWvdAAAAAJ:ufrVoPGSRksC",
    image: publicationImage("healtheqkg.png"),
    tags: ["AI in Healthcare", "Computational Social Science"],
    publicationType: "paper-conference",
  },
  {
    id: 4,
    name: "Medical school ranking and neighborhood characteristics of initial practice location among physicians",
    journal: "JAMA Network Open 2025",
    date: "2025-01-01",
    authors: "N.Nananukul, M.Kejriwal",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=h_YWvdAAAAAJ&citation_for_view=h_YWvdAAAAAJ:W7OEmFMy1HYC",
    image: publicationImage("jama.png"),
    extraLinks: [
      { type: "news", url: "https://jamanetwork.altmetric.com/details/177474306/news" },
      { type: "article", url: "https://www.isi.edu/news/76579/where-doctors-go-using-data-to-map-where-physicians-start-their-careers/" },
    ],
    tags: ["AI in Healthcare", "Computational Social Science"],
    publicationType: "article-journal",
  },
  {
    id: 5,
    name: "Balancing Efficiency and Quality in LLM-Based Entity Resolution on Structured Data",
    journal: "ASONAM 2024",
    date: "2024-01-01",
    authors: "N.Nananukul, M.Kejriwal",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=h_YWvdAAAAAJ&citation_for_view=h_YWvdAAAAAJ:Y0pCki6q_DkC",
    image: publicationImage("balancing.png"),
    tags: ["Entity Resolution", "Data Integration", "Large Language Models"],
    publicationType: "paper-conference",
  },
  {
    id: 6,
    name: "What if Red Can Talk? Dynamic Dialogue Generation Using Large Language Models",
    journal: "Wordplay @ ACL 2024",
    date: "2024-01-02",
    authors: "N.Nananukul, W.Wongkamjan",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=h_YWvdAAAAAJ&citation_for_view=h_YWvdAAAAAJ:qjMakFHDy7sC",
    image: publicationImage("What-if-red.png"),
    tags: ["Entity Resolution", "Data Integration", "Large Language Models"],
    publicationType: "paper-conference",
  },
  {
    id: 7,
    name: "Multi-source data integration for segmentation of unannotated MRI images",
    journal: "IEEE Journal of Biomedical and Health Informatics 2024",
    date: "2024-01-01",
    authors: "N.Nananukul, H.Soltanian-Zadeh, M.Rostami",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=h_YWvdAAAAAJ&citation_for_view=h_YWvdAAAAAJ:2osOgNQ5qMEC",
    image: publicationImage("DA.png"),
    tags: ["Computer Vision", "AI in Healthcare"],
    publicationType: "article-journal",
  },
  {
    id: 8,
    name: "Cost-efficient prompt engineering for unsupervised entity resolution in the product matching domain",
    journal: "Discover Artificial Intelligence 2024",
    date: "2024-01-01",
    authors: "N.Nananukul, K.Sisaengsuwanchai, M.Kejriwal",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=h_YWvdAAAAAJ&citation_for_view=h_YWvdAAAAAJ:UeHWp8X0CEIC",
    image: publicationImage("prompt-engineering.png"),
    tags: ["Entity Resolution", "Data Integration", "Large Language Models"],
    publicationType: "article-journal",
  },
  {
    id: 9,
    name: "Semi-Automatic Extraction and Analysis of Health Equity Covariates in Registered Research Projects",
    journal: "Applied Sciences 2025",
    date: "2025-01-01",
    authors: "N.Nananukul, M.Kejriwal",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=h_YWvdAAAAAJ&citation_for_view=h_YWvdAAAAAJ:_FxGoFyzp5QC",
    image: publicationImage("all-of-us-v3.png"),
    tags: ["AI in Healthcare", "Computational Social Science"],
    publicationType: "article-journal",
  },
  {
    id: 10,
    name: "HALO: an ontology for representing and categorizing hallucinations in large language models",
    journal: "Disruptive Technologies 2024",
    date: "2024-01-01",
    authors: "N.Nananukul, M.Kejriwal",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=h_YWvdAAAAAJ&citation_for_view=h_YWvdAAAAAJ:9yKSN-GCB0IC",
    image: publicationImage("HALO-data-process.png"),
    tags: ["Large Language Models", "Trustworthy AI"],
    publicationType: "paper-conference",
  },
  {
    id: 11,
    name: "ISAC: An Interactive Hierarchical Interface for Efficient Structural Analysis and Vertex Search in Complex Networks",
    journal: "ASONAM 2024",
    date: "2024-01-01",
    authors: "N.Nananukul, K.Sisaengsuwanchai, M.Kejriwal",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=h_YWvdAAAAAJ&citation_for_view=h_YWvdAAAAAJ:YsMSGLbcyi4C",
    image: publicationImage("ISAC-demo-v4.png"),
    tags: ["Graph Analytics", "HCI"],
    publicationType: "paper-conference",
  },
  {
    id: 12,
    name: "The plausibility machine commonsense (PMC) dataset: A massively crowdsourced human-annotated dataset for studying plausibility in large language models",
    journal: "Data in Brief 2024",
    date: "2024-01-01",
    authors: "N.Nananukul, K.Shen, M.Kejriwal",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=h_YWvdAAAAAJ&citation_for_view=h_YWvdAAAAAJ:IjCSPb-OGe4C",
    image: publicationImage("PMC.png"),
    tags: ["Large Language Models"],
    publicationType: "article-journal",
  },
];

export const TALKS = [
  {
    id: 1,
    title: "Invited Talk to USC President Beong-Soo Kim",
    image: `${publicUrl}/uploads/talk-usc-president.png`,
    description:
      "I was invited to present to USC President Beong-Soo Kim about the critical need for AI systems that are not just smart, but fundamentally verifiable and compliant, especially in legal, ethical, and healthcare domains. The presentation highlighted our ongoing DARPA CODORD research and how neurosymbolic approaches can help AI agents follow deontic rules in high-stakes settings.",
  },
];

export const SERVICES = [
  {
    title: "Research Scientist Intern",
    date: "May 2026 - Aug 2026",
    venue: "GRAIL AI",
    icon: `${orgUrl}/grail.png`,
  },
  {
    title: "Graduate Research Assistant",
    date: "Aug 2023 - Present",
    venue: "USC ISI, AICS Lab",
    icon: `${orgUrl}/isi.webp`,
  },
  {
    title: "Data Scientist (Contract)",
    date: "Dec 2024 - Jun 2025",
    venue: "Genuine Parts Company",
    icon: `${orgUrl}/gpc.svg`,
  },
  {
    title: "Senior Data Analyst / Scientist",
    date: "Sep 2018 - Jul 2021",
    venue: "Agoda International (USA)",
    icon: `${orgUrl}/agoda.png`,
  },
  {
    title: "Business Intelligence Developer",
    date: "Jun 2017 - Sep 2018",
    venue: "Agoda",
    icon: `${orgUrl}/agoda.png`,
  },
];

export const EDUCATION = [
  {
    degree: "Ph.D. in Industrial and Systems Engineering",
    institution: "University of Southern California",
    date: "Aug 2025 - Present",
    icon: `${orgUrl}/usc.avif`,
  },
  {
    degree: "M.S. in Computer Science",
    institution: "University of Southern California",
    date: "Aug 2021 - Aug 2023",
    icon: `${orgUrl}/usc.avif`,
  },
  {
    degree: "B.S. in Computer Science",
    institution: "Chulalongkorn University",
    date: "May 2013 - May 2017",
    icon: `${orgUrl}/chula.png`,
  },
];

export const ABOUT_TEXT = `
  <p>I am Navapat (Pat), a Ph.D. student at USC's Information Sciences Institute (ISI), advised by Prof. <a href="https://usc-isi-i2.github.io/kejriwal/" target="_blank" rel="noopener noreferrer">Mayank Kejriwal</a> in the <a href="https://aicomplex.github.io/index.html" target="_blank" rel="noopener noreferrer">Artificial Intelligence and Complex Systems (AICS)</a> Group. My research addresses a critical gap in AI: how can we build systems that reason not just accurately, but rigorously, verifiably, and with full accountability?</p>
  <p>I work at the intersection of neurosymbolic AI, large language models, and formal logic to ground LLMs in rigorous symbolic reasoning. The core challenge I address: complex, real-world knowledge (like clinical guidelines) is non-monotonic and full of exceptions. How can we tether LLMs to formal logic and knowledge graphs so their reasoning is transparent, traceable to authoritative sources, and explainable? My approach combines LLMs with defeasible logic reasoners and structured knowledge representations to enable verifiable AI reasoning over complex domains.</p>
  <p>I am conducting research under DARPA's <a href="https://www.darpa.mil/research/programs/codord" target="_blank" rel="noopener noreferrer">Human-AI Communication for Deontic Reasoning (CODORD)</a> program, developing scalable methods for humans to express and refine complex obligations, permissions, and prohibitions in natural language.</p>
`;
