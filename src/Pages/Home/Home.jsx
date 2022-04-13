/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../components';

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="header">
        <img
          onClick={() => navigate('/')}
          className="logo"
          src="https://play-lh.googleusercontent.com/tXqP0knYe0kebB7IfdrVuMq8mAQEUPNf6R8IH1aR38evurTx1eTwR8VRmDpCIpvi7Go"
          alt="logo"
        />
        <h3 className="header-title">السلام عليكم</h3>
      </div>

      <main>
        <Container>
          <section className="next-prayer-card">
            <img src="https://i.imgur.com/tQLsGiS.png?1" alt="mosque-icon" />

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
                src="https://i.imgur.com/LeNiWrd.png"
                alt="pray-hands"
                className="category-image"
              />
              <p className="category-name">أذكار المسلم</p>
            </div>
            <div className="category-card" onClick={() => navigate('/prayer')}>
              <img
                src="https://i.imgur.com/Gjx0KaC.png"
                alt="pray-hands"
                className="category-image"
              />
              <p className="category-name">الصلوات</p>
            </div>
            <div className="category-card" onClick={() => navigate('/quran')}>
              <img
                src="https://i.imgur.com/oYqxHtJ.png"
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
