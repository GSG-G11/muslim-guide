/* eslint-disable no-nested-ternary */

import axios from 'axios';
import { TailSpin } from 'react-loader-spinner';
import {
  React, useState, useEffect, createContext,
} from 'react';
import colors from '../../colors.json';
import { Container, Input } from '../../components';
import Header from '../../components/Header';
import PrayerTime from '../../components/PrayerTime';
import './style.css';

export const PrayerContext = createContext({});

function Prayer() {
  const [citySearch, setCitySearch] = useState('');
  const [randomColor, setRandomColor] = useState('');
  const [citySubmit, setCitySubmit] = useState('');
  const [prayerData, setPrayerData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const arPrayer = [
    null,
    'الفجر',
    'الشروق',
    'الظهر',
    'العصر',
    'المغرب',
    'العشاء',
  ];
  const handleChange = ({ target: { value } }) => {
    setCitySearch(value);
  };
  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    setCitySubmit(citySearch);
    setRandomColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  useEffect(() => {
    const source = axios.CancelToken.source();
    axios
      .request({
        method: 'GET',
        url: `https://muslimsalat.p.rapidapi.com/${
          citySubmit.split(' ').join('%20') || 'غزة'
        }.json`,
        headers: {
          'X-RapidAPI-Host': 'muslimsalat.p.rapidapi.com',
          'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        },
        cancelToken: source.token,
      })
      .then(({ data }) => {
        setIsLoading(false);
        setPrayerData({
          allPrayerData: data.items[0],
          prayerTime: Object.values(data.items[0]) || [],
          prayerName: Object.keys(data.items[0]) || [],
          city: data.query,
          errorMessage: '',
        });
      })
      .catch((error) => {
        if (error) {
          setPrayerData({
            city: '',
            prayerTime: [],
            prayerName: [],
            errorMessage: 'No data for this city, Try another one',
          });
        }
      });
    return () => {
      source.cancel('Operation canceled by the user.');
    };
  }, [citySubmit, isLoading]);
  return (
    <PrayerContext.Provider value={prayerData}>
      <Header>أوقات الصلاة</Header>
      <Container>
        <div className="prayer-container">
          <form onSubmit={handleSubmit}>
            <Input
              placeHolder="اكتب اسم المدينة"
              handleInputChange={handleChange}
              value={citySearch}
              name="city_name"
            />
          </form>
          <span className="prayer-city-name">{prayerData.city}</span>
          <span className="prayer-date-for">
            {prayerData.prayerTime ? prayerData.prayerTime[0] : ''}
          </span>
          {!prayerData.errorMessage ? (
            <div
              className="prayer-name-time-container"
              style={{ backgroundColor: `${randomColor}` }}
            >
              {isLoading ? (
                <TailSpin
                  color="#FE5732"
                  height={100}
                  width={100}
                  ariaLabel="loading"
                />
              ) : prayerData.prayerTime ? (
                prayerData.prayerName.map((name, index) => {
                  const time = prayerData.prayerTime[index];
                  if (name !== 'date_for') {
                    return (
                      <PrayerTime
                        key={name}
                        className={name}
                        prayerName={arPrayer[index]}
                        time={time}
                      />
                    );
                  }
                  return undefined;
                })
              ) : (
                <> </>
              )}
            </div>
          ) : (
            <p className="prayer-error-message">{prayerData.errorMessage}</p>
          )}
        </div>
      </Container>
    </PrayerContext.Provider>
  );
}

export default Prayer;
