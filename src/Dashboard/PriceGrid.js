import React from 'react';
import { AppContext } from '../App/AppProvider';
import styled from 'styled-components';
import PriceTile from './PriceTile';

const PriceGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin-top: 48px;
`;

export default function PriceGrid() {
  return (
    <AppContext.Consumer>
      {({ prices, currentFavorite, setCurrentFavorite }) => (
        <PriceGridStyled>
          {prices.map((price, index) => (
            <PriceTile
              index={index}
              price={price}
              currentFavorite={currentFavorite}
              setCurrentFavorite={setCurrentFavorite}
              key={`priceTile-${index}`}
            />
          ))}
        </PriceGridStyled>
      )}
    </AppContext.Consumer>
  );
}
