import React from 'react';
import ConfirmButton from './ConfirmButton';
import WelcomeMessage from './WelcomeMessage';
import Page from '../Shared/Page';
import CoinGrid from './CoinGrid';
import Search from './Search';
import { AppContext } from '../App/AppProvider';

export default function Settings() {
  return (
    <AppContext.Consumer>
      {({ setFilteredCoins, coinList }) => (
        <Page name="settings">
          <WelcomeMessage />
          <CoinGrid topSection />
          <ConfirmButton />
          <Search setFilteredCoins={setFilteredCoins} coinList={coinList} />
          <CoinGrid />
        </Page>
      )}
    </AppContext.Consumer>
  );
}
