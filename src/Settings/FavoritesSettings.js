import React, { useState } from 'react';
import ConfirmButton from './ConfirmButton';
import WelcomeMessage from './WelcomeMessage';
import CoinGrid from './CoinGrid';
import Search from './Search';

const MAX_FAVORITES = 10;

export default function FavoritesSettings({
  setFilteredCoins,
  coinList,
  oldFavorites,
  confirmFavorites,
}) {
  const [favorites, setFavorites] = useState(oldFavorites);

  const addCoin = (key) => {
    let newFavorites = [...favorites];
    if (newFavorites.length < MAX_FAVORITES) {
      newFavorites.push(key);
      setFavorites(newFavorites);
    }
  };

  const removeCoin = (key) => {
    let newFavorites = favorites.filter((fav) => fav !== key);
    setFavorites(newFavorites);
  };

  return (
    <>
      <WelcomeMessage />
      <CoinGrid topSection favorites={favorites} clickHandler={removeCoin} />
      <ConfirmButton clickHandler={() => confirmFavorites(favorites)} />
      <Search setFilteredCoins={setFilteredCoins} coinList={coinList} />
      <CoinGrid
        favorites={favorites}
        setFavorites={setFavorites}
        clickHandler={addCoin}
      />
    </>
  );
}
