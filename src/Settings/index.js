import React from 'react';
import Page from '../Shared/Page';
import { AppContext } from '../App/AppProvider';
import FavoritesSettings from './FavoritesSettings';

export default function Settings() {
  return (
    <AppContext.Consumer>
      {({ setFilteredCoins, coinList, favorites, confirmFavorites }) => (
        <Page name="settings">
          <FavoritesSettings
            setFilteredCoins={setFilteredCoins}
            coinList={coinList}
            oldFavorites={favorites}
            confirmFavorites={confirmFavorites}
          />
        </Page>
      )}
    </AppContext.Consumer>
  );
}
