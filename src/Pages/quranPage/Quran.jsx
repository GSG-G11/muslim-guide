import React, { useState, useEffect } from 'react';
import { Container } from '../../components';
import Header from '../../components/Header';
import frame from '../../assets/frame.jpg';
import './style.css';

function Quran() {
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    if (pageNumber >= 604) setPageNumber(604);
    else if (pageNumber < 1) setPageNumber(1);
  }, [pageNumber]);
  return (
    <>
      <Header>
        <h3 className="header-title">القرآن الكريم</h3>
      </Header>
      <Container>
        <div className="quran-main-container">
          <div className="quran-container">
            <div className="quran-frame">
              <img className="frame" src={frame} alt="Frame" />
            </div>
            <div className="quran-page">
              <img
                className="page"
                src={`https://quran-images-api.herokuapp.com/show/page/${
                  pageNumber || 1
                } `}
                alt=""
              />
            </div>
          </div>
          <div className="page-counter">
            <button
              className="prev"
              onClick={() => {
                setPageNumber((prev) => prev < 604 && prev + 1);
              }}
              type="button"
            >
              &gt;
            </button>
            <p className="page-number">{pageNumber}</p>
            <button
              className="next"
              onClick={() => {
                setPageNumber((prev) => prev > 1 && prev - 1);
              }}
              type="button"
            >
              &lt;
            </button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Quran;
