import React from 'react';
import { SelectableTile, DisabledTile, DeletableTile } from '../Shared/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from '../Shared/CoinImage';

// function clickCoinHandler(topSection, coinKey, addCoin, removeCoin) {
//   return topSection ? () => removeCoin(coinKey) : () => addCoin(coinKey);
// }

export default function CoinTile({
  coin,
  coinKey,
  topSection,
  favorites,
  clickHandler,
}) {
  const isInFavorites = (key) => favorites.some((fav) => fav === key);

  let TileClass = SelectableTile;
  if (topSection) {
    TileClass = DeletableTile;
  } else if (isInFavorites(coinKey)) {
    TileClass = DisabledTile;
  }
  return (
    <TileClass onClick={() => clickHandler(coinKey)}>
      <CoinHeaderGrid
        topSection={topSection}
        name={coin.CoinName}
        symbol={coin.Symbol}
      />
      <CoinImage coin={coin} />
    </TileClass>
  );
}
