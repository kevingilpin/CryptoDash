import React from 'react';
import { AppContext } from '../App/AppProvider';
import ReactHighcharts from 'react-highcharts';
import highchartsConfig from './HighchartsConfig';
import { Tile } from '../Shared/Tile';
import HighchartsTheme from './HighchartsTheme';

ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

export default function PriceChart() {
  return (
    <AppContext.Consumer>
      {({ currentFavorite }) => (
        <Tile>
          <ReactHighcharts config={highchartsConfig(currentFavorite)} />
        </Tile>
      )}
    </AppContext.Consumer>
  );
}
