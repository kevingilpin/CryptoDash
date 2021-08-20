import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import CoinTile from './CoinTile';

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin-top: 20px;
`;

function getCoinsToDisplay(coinList, topSection, favorites) {
  return topSection ? favorites : Object.keys(coinList).slice(0, 50);
}

export default function CoinGrid({ topSection }) {
  return (
    <AppContext.Consumer>
      {({ coinList, favorites, isInFavorites }) => (
        <CoinGridStyled>
          {getCoinsToDisplay(coinList, topSection, favorites).map((coinKey) => (
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
