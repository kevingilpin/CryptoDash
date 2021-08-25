import React, { useEffect, useReducer } from 'react';
import {
  fetchCoins,
  fetchPrices,
  fetchHistorical,
  saveFavorites,
  loadSavedSettings,
} from '../helpers';
import cc from 'cryptocompare';

cc.setApiKey(
  'bf68a48903c9218c43a4591f81b057cbd0881c35b4a3d829cadd3dc9240a431e'
);

export const AppContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'updateCoins':
      return { ...state, coinList: action.value };
    case 'updatePrices':
      return { ...state, prices: action.value };
    case 'updateHistorical':
      return { ...state, historical: action.value };
    case 'changePage':
      return { ...state, page: action.value };
    case 'confirmFavorites':
      return { ...state, ...saveFavorites(action.value) };
    case 'setCurrentFavorite':
      return { ...state, currentFavorite: action.value, historical: null };
    case 'setFilteredCoins':
      return { ...state, filteredCoins: action.value };
    case 'changeTimeInterval':
      return { ...state, timeInterval: action.value, historical: null };
    default:
      return state;
  }
}

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    page: 'dashboard',
    coinList: null,
    favorites: ['BTC', 'ETH', 'XMR', 'DOGE'],
    currentFavorite: 'BTC',
    firstVisit: true,
    timeInterval: 'months',
    ...loadSavedSettings(),
  });

  useEffect(() => {
    fetchCoins(dispatch);
  }, []);
  useEffect(() => {
    dispatch({ type: 'updatePrices', value: null });
    fetchPrices(state.favorites, dispatch);
  }, [state.favorites]);
  useEffect(() => {
    fetchHistorical(state.currentFavorite, state.timeInterval, dispatch);
  }, [state.currentFavorite, state.timeInterval]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};
