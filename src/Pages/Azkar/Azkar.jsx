import React, {
  useRef, useContext, useState, useEffect,
} from 'react';
import { Outlet } from 'react-router-dom';

import { Container, Header, AzkarCard } from '../../components';
import { Context } from '../../Context/Context';

import './Azkar.css';

function Azkar() {
  const { error, azkarCategory, colors } = useContext(Context);
  const [filteredAzkar, setFilteredAzkar] = useState([]);
  const input = useRef();

  if (error) return <div className="errorMsg">{error}</div>;

  useEffect(() => setFilteredAzkar(azkarCategory), []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchedZekr = input.current.value.trim().split('');

    if (searchedZekr[0] === 'ا' && searchedZekr[1] !== 'ل') {
      searchedZekr[0] = 'أ';
    }
    setFilteredAzkar(
      azkarCategory.filter((category) => category.includes(searchedZekr.join(''))),
    );
  };

  return (
    <>
      <Header>اذكار المسلم</Header>
      <form className="searchAzkarForm" onSubmit={handleSubmit}>
        <input
          className="searchAzkarInput"
          type="search"
          ref={input}
          lang="ar"
          placeholder="ابحث عن اﻷذكار"
        />
      </form>
      <div className="azkar-cards">
        <Container>
          {!filteredAzkar.length && <p className="noAzkarFound">!!  لا يوجد أذكار او أدعية بهذا الاسم</p>}
          {filteredAzkar.map((category, i) => (
            <AzkarCard color={colors[i]} category={category} key={category} />
          ))}
        </Container>
      </div>

      <Outlet />
    </>
  );
}

export default Azkar;
