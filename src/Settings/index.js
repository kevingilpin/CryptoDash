import React, { useState, useContext } from 'react';
import Page from '../Shared/Page';
import { AppContext } from '../App/AppProvider';
import ConfirmButton from './ConfirmButton';
import WelcomeMessage from './WelcomeMessage';
import CoinGrid from './CoinGrid';
import Search from './Search';

const MAX_FAVORITES = 10;

export default function Settings() {
  const {
    state: { coinList, favorites, filteredCoins },
    dispatch,
  } = useContext(AppContext);
  const [tempFavorites, setTempFavorites] = useState(favorites);

  const addCoin = (key) => {
    let newFavorites = [...tempFavorites];
    if (newFavorites.length < MAX_FAVORITES) {
      newFavorites.push(key);
      setTempFavorites(newFavorites);
    }
  };

  const removeCoin = (key) => {
    let newFavorites = tempFavorites.filter((fav) => fav !== key);
    setTempFavorites(newFavorites);
  };

  return (
    <Page name="settings">
      <WelcomeMessage />
      <CoinGrid
        topSection
        favorites={tempFavorites}
        coinList={coinList}
        filteredCoins={filteredCoins}
        clickHandler={removeCoin}
      />
      <ConfirmButton
        clickHandler={() =>
          dispatch({ type: 'confirmFavorites', value: tempFavorites })
        }
      />
      <Search
        setFilteredCoins={(filteredCoins) =>
          dispatch({ type: 'setFilteredCoins', value: filteredCoins })
        }
        coinList={coinList}
      />
      <CoinGrid
        favorites={tempFavorites}
        setFavorites={setTempFavorites}
        coinList={coinList}
        filteredCoins={filteredCoins}
        clickHandler={addCoin}
      />
    </Page>
  );
}
