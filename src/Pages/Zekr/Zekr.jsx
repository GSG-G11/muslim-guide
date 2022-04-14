import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../../Context/Context';

import Header from '../../components/Header';
import { Container } from '../../components';

import './Zekr.css';
import ZekrCard from '../../components/ZekrCard';

function Zekr() {
  const { category } = useParams();
  const { azkar } = useContext(Context);

  const selectedAzkar = azkar.filter((zekr) => zekr.category === category);

  return (
    <>
      <Header>
        {category}
      </Header>
      <div className="zekr-cards">
        <Container>
          <ZekrCard azkar={selectedAzkar} />
        </Container>
      </div>
    </>
  );
}

export default Zekr;
