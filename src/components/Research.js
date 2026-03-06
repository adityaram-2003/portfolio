import React, { useState } from 'react';

const papers = [
  {
    title: 'Uncertainty-Aware Molecular Property Prediction Using Heterogeneous Molecular GNNs',
    year: '2025',
    publisher: 'Springer Nature',
    doi: 'https://doi.org/10.1007/978-981-97-9132-3-16',
    description:
      'Proposed an uncertainty-aware framework for molecular property prediction leveraging heterogeneous Graph Neural Networks (GNNs), enabling more reliable predictions with quantified confidence for downstream scientific applications.',
    tags: ['GNNs', 'Molecular ML', 'Uncertainty Quantification', 'Deep Learning'],
    status: 'published',
  },
  {
    title: 'Detection of Bone Fractures from Medical Imaging Data Using Machine Learning',
    year: '2024',
    publisher: 'IEEE',
    doi: null,
    description:
      'Developed and evaluated machine learning models for automated detection of bone fractures from medical X-ray imaging data. Manuscript currently under review at IEEE.',
    tags: ['Medical Imaging', 'Computer Vision', 'Machine Learning', 'Healthcare AI'],
    status: 'under review',
  },
  {
    title: 'Performance Comparison of Depth Limited Search and A* Algorithm: A Case Study',
    year: '2023',
    publisher: 'E3S Web of Conferences',
    doi: 'https://doi.org/10.1051/e3sconf/202339101140',
    description:
      'A comparative case study analyzing the performance characteristics of Depth Limited Search and A* pathfinding algorithms across multiple problem domains, evaluating runtime efficiency, memory usage, and solution optimality.',
    tags: ['Algorithms', 'AI Search', 'A*', 'Graph Traversal'],
    status: 'published',
  },
];

const PaperCard = ({ paper, index }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="paper-card">
      <div className="paper-index">{String(index + 1).padStart(2, '0')}</div>
      <div className="paper-content">
        <div className="paper-meta">
          <span className="paper-year">{paper.year}</span>
          <span className="paper-publisher">{paper.publisher}</span>
          <span className={`paper-status ${paper.status === 'published' ? 'status-published' : 'status-review'}`}>
            {paper.status === 'published' ? '● Published' : '◌ Under Review'}
          </span>
        </div>
        <h3 className="paper-title">{paper.title}</h3>
        {expanded && (
          <p className="paper-description">{paper.description}</p>
        )}
        <div className="paper-tags">
          {paper.tags.map((tag, i) => (
            <span className="paper-tag" key={i}>{tag}</span>
          ))}
        </div>
        <div className="paper-actions">
          <button className="paper-btn-text" onClick={() => setExpanded(!expanded)}>
            {expanded ? '▲ Less' : '▼ Abstract'}
          </button>
          {paper.doi && (
            <a
              href={paper.doi}
              rel="noopener noreferrer"
              target="_blank"
              className="paper-btn-link"
            >
              Read Paper →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Research = () => {
  return (
    <div className="research-container">
      {papers.map((paper, index) => (
        <PaperCard paper={paper} index={index} key={index} />
      ))}
    </div>
  );
};

export default Research;
