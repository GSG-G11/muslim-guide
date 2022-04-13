/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../components';
import logo from '../../assets/logo.png';
import pray from '../../assets/pray.png';
import quran from '../../assets/quran.png';
import hands from '../../assets/hands.png';
import mosque from '../../assets/mosque.png';

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="header">
        <img
          className="logo"
          src={logo}
          alt="logo"
        />
        <h3 className="header-title">السلام عليكم</h3>
      </div>

      <main>
        <Container>
          <section className="next-prayer-card">
            <img src={mosque} alt="mosque-icon" />

            <div className="text">
              <p className="zekr">أستغفر الله العظيم</p>
              <p className="prayer-info">
                المغرب
                <span>م7:10</span>
              </p>
            </div>
          </section>

          <section className="categories-cards">
            <div className="category-card" onClick={() => navigate('/azkar')}>
              <img
                src={hands}
                alt="pray-hands"
                className="category-image"
              />
              <p className="category-name">أذكار المسلم</p>
            </div>
            <div className="category-card" onClick={() => navigate('/prayer')}>
              <img
                src={pray}
                alt="pray-hands"
                className="category-image"
              />
              <p className="category-name">الصلوات</p>
            </div>
            <div className="category-card" onClick={() => navigate('/quran')}>
              <img
                src={quran}
                alt="pray-hands"
                className="category-image"
              />
              <p className="category-name">القران الكريم</p>
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}

export default Home;
