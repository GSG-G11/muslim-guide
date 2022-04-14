import React, {
  createContext, useEffect, useState, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import colorsList from '../colors.json';

export const Context = createContext({
  azkar: [],
  azkarCategory: [],
  colors: [],
  error: '',
});

function ContextProvider({ children }) {
  const [azkar, setAzkar] = useState([]);
  const [colors, setColors] = useState([]);
  const [azkarCategory, setAzkarCategory] = useState([]);
  const [error, setError] = useState('');

  const fetchAzkar = async () => {
    const azkarUrl = 'https://raw.githubusercontent.com/osamayy/azkar-db/master/azkar.json';
    const { data } = await axios(azkarUrl);

    setAzkar(data);
    setAzkarCategory([...new Set(data.map(({ category }) => category))]);
    setColors(colorsList);
  };

  useEffect(() => {
    const errMsg = 'oops,something went wrong, please try again later!!';
    fetchAzkar().catch(() => setError(errMsg));
  }, []);

  const memoizedContext = useMemo(
    () => ({
      azkar,
      azkarCategory,
      error,
      colors,
    }),
    [azkar, azkarCategory, error],
  );

  return <Context.Provider value={memoizedContext}>{children}</Context.Provider>;
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
