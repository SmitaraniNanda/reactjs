import React, { useState } from 'react';
import '../App.css';
import searchIcon from '../assets/search.jpeg';
import excelIcon from '../assets/excel.jpeg';
import pdfIcon from '../assets/pdf.png';
import likeIcon from '../assets/like.jpeg';
import dislikeIcon from '../assets/dislike.png';
import dollarTreeLogo from '../assets/dollarTree.png';
import carmaxLogo from '../assets/carmax.png';

const EricSearchResults = () => {
  const [showReferences, setShowReferences] = useState(false);
  const [activeCompany, setActiveCompany] = useState(null);

  const toggleReferences = (company) => {
    if (activeCompany === company) {
      setShowReferences(false);
      setActiveCompany(null);
    } else {
      setShowReferences(true);
      setActiveCompany(company);
    }
  };

  return (
    <div className="container">
      <div className="header-section">
        <h2>ERIC Search Results</h2>
        <div className="export-buttons">
          <button className="excel-button"><img src={excelIcon} alt="Excel" /> EXCEL</button>
          <button><img src={pdfIcon} alt="PDF" /> PDF</button>
        </div>
      </div>

      <div className="question-box">
        <div className="question-header">
          <img src={searchIcon} alt="Search" className="search-icon" />
          <h3>Which companies have granted new hire awards?</h3>
        </div>
        <p className="answer-text">
          Among the companies reviewed, Dollar Tree, Inc. has granted new hire awards...
        </p>
        <p className="note-text">
          Interested in deeper analytics on new hire, retention, or other special awards? Try our
          <a href="/"> Executive Compensation tool</a> or meet with your
          <a href="/"> account manager Tanner</a> for customized recommendations.
        </p>
        <div className="feedback-icons right">
          <img src={likeIcon} alt="Like" />
          <img src={dislikeIcon} alt="Dislike" />
        </div>
      </div>

      <div className="results-container">
        <div className="left-column">
          {/* === Summary Card 1 === */}
          <div className="response-card">
            <div className="response-header">
              <img src={dollarTreeLogo} alt="Dollar Tree" className="company-logo" />
              <div>
                <strong>Dollar Tree, Inc. (DLTR)</strong>
                <div className="reference-tag">DEF 14A (5/6/2025)</div>
              </div>
            </div>
            <div className="response-body">
              <p>
                Yes, the company has granted new hire awards. The disclosures confirm that the Compensation Committee grants equity-based awards to newly hired executive officers...
              </p>
              <div className="response-actions">
                <span onClick={() => toggleReferences('DLTR')}>
                  {activeCompany === 'DLTR' && showReferences ? 'Close References' : 'View References'}
                </span>
                <div className="feedback-icons right">
                  <img src={likeIcon} alt="Like" />
                  <img src={dislikeIcon} alt="Dislike" />
                </div>
              </div>
            </div>
          </div>

          {/* === Summary Card 2 === */}
          <div className="response-card">
            <div className="response-header">
              <img src={carmaxLogo} alt="CarMax" className="company-logo" />
              <div>
                <strong>CarMax, Inc. (KMX)</strong>
                <div className="reference-tag">DEF 14A (5/8/2025)</div>
              </div>
            </div>
            <div className="response-body">
              <p>
                Based on the provided disclosures, the company generally grants equity awards to its named executive officers...
              </p>
              <div className="response-actions">
                <span onClick={() => toggleReferences('KMX')}>
                  {activeCompany === 'KMX' && showReferences ? 'Close References' : 'View References'}
                </span>
                <div className="feedback-icons right">
                  <img src={likeIcon} alt="Like" />
                  <img src={dislikeIcon} alt="Dislike" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {showReferences && (
          <div className="right-column">
            <div className="reference-panel">
              <div className="reference-header">
                <strong>{activeCompany === 'DLTR' ? 'Dollar Tree, Inc. (DLTR)' : 'CarMax, Inc. (KMX)'}</strong>
                <span className="reference-close" onClick={() => toggleReferences(activeCompany)}>✕</span>
              </div>
              <div className="reference-content">
                <p>This is the detailed reference text for {activeCompany}...</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EricSearchResults;
