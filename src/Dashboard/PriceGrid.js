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
      {({ state: { prices, currentFavorite }, dispatch }) => (
        <PriceGridStyled>
          {prices?.map((price, index) => (
            <PriceTile
              index={index}
              price={price}
              currentFavorite={currentFavorite}
              setCurrentFavorite={(sym) =>
                dispatch({ type: 'setCurrentFavorite', value: sym })
              }
              key={`priceTile-${index}`}
            />
          ))}
        </PriceGridStyled>
      )}
    </AppContext.Consumer>
  );
}
