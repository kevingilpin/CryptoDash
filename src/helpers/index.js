import cc from 'cryptocompare';
import moment from 'moment';

const TIME_UNITS = 10;

cc.setApiKey(
  'bf68a48903c9218c43a4591f81b057cbd0881c35b4a3d829cadd3dc9240a431e'
);

export const fetchCoins = async (dispatch) => {
  console.log('fetching coins...');
  let coinList = (await cc.coinList()).Data;
  console.log('fetchCoins BTC: ', coinList['BTC']);
  dispatch({ type: 'updateCoins', value: coinList });
};

const prices = async (favorites) => {
  let returnData = [];
  if (favorites) {
    for (let i = 0; i < favorites.length; i++) {
      try {
        let priceData = await cc.priceFull(favorites[i], 'USD');
        returnData.push(priceData);
      } catch (e) {
        console.warn('Fetch price error: ', e);
      }
    }
  }
  return returnData;
};

export const fetchPrices = async (favorites, dispatch) => {
  console.log('fetching prices');
  let results = await prices(favorites);
  results = results.filter((price) => Object.keys(price).length);
  dispatch({ type: 'updatePrices', value: results });
};

const historical = (currentFavorite, timeInterval) => {
  let promises = [];
  for (let units = TIME_UNITS; units > 0; units--) {
    promises.push(
      cc.priceHistorical(
        currentFavorite,
        ['USD'],
        moment()
          .subtract({ [timeInterval]: units })
          .toDate()
      )
    );
  }
  return Promise.all(promises);
};

export const fetchHistorical = async (
  currentFavorite,
  timeInterval,
  dispatch
) => {
  // if (this.state.firstVisit) return;
  let results = await historical(currentFavorite, timeInterval);
  let historicalData = [
    {
      name: currentFavorite,
      data: results.map((ticker, index) => [
        moment()
          .subtract({ [timeInterval]: TIME_UNITS - index })
          .valueOf(),
        ticker.USD,
      ]),
    },
  ];
  dispatch({ type: 'updateHistorical', value: historicalData });
};

export const loadSavedSettings = () => {
  let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
  let { favorites } = cryptoDashData;
  if (!favorites) {
    return { page: 'settings', firstVisit: true };
  }
  return { favorites };
};

export const saveFavorites = (favorites) => {
  localStorage.setItem('cryptoDash', JSON.stringify({ favorites }));
  return {
    firstVisit: false,
    page: 'dashboard',
    currentFavorite: favorites[0],
    favorites,
  };
};
