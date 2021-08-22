import React from 'react';
import styled, { css } from 'styled-components';
import { SelectableTile } from '../Shared/Tile';
import { fontSize3, fontSizeBig, greenBoxShadow } from '../Shared/Styles';
import { CoinHeaderGridStyled } from '../Settings/CoinHeaderGrid';

const JustifyRight = styled.div`
  justify-self: right;
`;

const JustifyLeft = styled.div`
  justify-self: left;
`;

const TickerPrice = styled.div`
  ${fontSizeBig}
`;

const ChangePct = styled.div`
  color: ${(props) => (props.pctChange >= 0 ? 'green' : 'red')};
`;

const numberFormat = (number) => {
  return +(number + '').slice(0, 7);
};

function ChangePercent({ data }) {
  return (
    <JustifyRight>
      <ChangePct pctChange={data.CHANGEPCT24HOUR}>
        {numberFormat(data.CHANGEPCT24HOUR)}
      </ChangePct>
    </JustifyRight>
  );
}

const PriceTileStyled = styled(SelectableTile)`
  ${(props) =>
    props.compact &&
    css`
      ${fontSize3}
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 5px;
      justify-items: right;
    `}
  ${(props) =>
    props.isFavorite &&
    css`
      ${greenBoxShadow}
      pointer-events: none;
    `}
`;

function PriceTileLarge({ sym, data, isFavorite, setCurrentFavorite }) {
  return (
    <PriceTileStyled onClick={setCurrentFavorite} isFavorite={isFavorite}>
      <CoinHeaderGridStyled>
        <div>{sym}</div>
        <ChangePercent data={data} />
      </CoinHeaderGridStyled>
      <TickerPrice>${numberFormat(data.PRICE)}</TickerPrice>
    </PriceTileStyled>
  );
}

function PriceTileCompact({ sym, data, isFavorite, setCurrentFavorite }) {
  return (
    <PriceTileStyled
      onClick={setCurrentFavorite}
      compact
      isFavorite={isFavorite}
    >
      <JustifyLeft>{sym}</JustifyLeft>
      <ChangePercent data={data} />
      <div>${numberFormat(data.PRICE)}</div>
    </PriceTileStyled>
  );
}

export default function PriceTile({
  price,
  index,
  currentFavorite,
  setCurrentFavorite,
}) {
  let sym = Object.keys(price)[0];
  let data = price[sym]['USD'];
  let TileClass = index < 5 ? PriceTileLarge : PriceTileCompact;
  return (
    <TileClass
      sym={sym}
      data={data}
      isFavorite={sym === currentFavorite}
      setCurrentFavorite={() => setCurrentFavorite(sym)}
    />
  );
}
