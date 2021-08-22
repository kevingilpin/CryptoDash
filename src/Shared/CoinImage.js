import React from 'react';
import styled, { css } from 'styled-components';

const CoinImageStyled = styled.img`
  height: 50px;
  display: block;
  margin: auto;
  ${(props) =>
    props.spotlight &&
    css`
      height: 200px;
    `}
`;

export default function CoinImage({ coin, spotlight }) {
  return (
    <CoinImageStyled
      spotlight={spotlight}
      alt={coin.CoinSymbol}
      src={`http://cryptocompare.com/${coin.ImageUrl}`}
    />
  );
}
