import React from 'react';
import './Home.css';
import { Container, RitualCard } from '../../components';
import logo from '../../assets/logo.png';
import pray from '../../assets/pray.png';
import quran from '../../assets/quran.png';
import hands from '../../assets/hands.png';
import mosque from '../../assets/mosque.png';

function Home() {
  return (
    <>
      <div className="header">
        <img className="logo" src={logo} alt="logo" />
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
            <RitualCard
              pathUrl={hands}
              altText="pray-hands"
              title="أذكار المسلم"
              route="/azkar"
            />

            <RitualCard
              pathUrl={pray}
              altText="praying-man"
              title="الصلوات"
              route="/prayer"
            />

            <RitualCard
              pathUrl={quran}
              altText="quran-book"
              title="القران الكريم"
              route="/quran"
            />
          </section>
        </Container>
      </main>
    </>
  );
}

export default Home;
