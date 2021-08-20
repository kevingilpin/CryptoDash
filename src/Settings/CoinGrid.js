import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import CoinTile from './CoinTile';

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-gap: 15px;
  margin-top: 20px;
`;

function getLowerSectionCoins(coinList, filteredCoins) {
  return (
    (filteredCoins &&
      Object.values(filteredCoins)
        .sort((a, b) => {
          return parseInt(a.SortOrder) - parseInt(b.SortOrder);
        })
        .slice(0, 50)
        .map((coin) => coin.Symbol)) ||
    Object.values(coinList)
      .sort((a, b) => {
        return parseInt(a.SortOrder) - parseInt(b.SortOrder);
      })
      .slice(0, 50)
      .map((coin) => coin.Symbol)
  );
}

function getCoinsToDisplay(coinList, topSection, favorites, filteredCoins) {
  return topSection ? favorites : getLowerSectionCoins(coinList, filteredCoins);
}

export default function CoinGrid({ topSection }) {
  return (
    <AppContext.Consumer>
      {({ coinList, favorites, isInFavorites, filteredCoins }) => (
        <CoinGridStyled>
          {getCoinsToDisplay(
            coinList,
            topSection,
            favorites,
            filteredCoins
          ).map((coinKey) => (
            <CoinTile
              topSection={topSection}
              coinKey={coinKey}
              key={coinKey}
              isInFavorites={isInFavorites}
            />
          ))}
        </CoinGridStyled>
      )}
    </AppContext.Consumer>
  );
}
