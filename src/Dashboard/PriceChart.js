import React from 'react';
import { AppContext } from '../App/AppProvider';
import ReactHighcharts from 'react-highcharts';
import highchartsConfig from './HighchartsConfig';
import { Tile } from '../Shared/Tile';
import HighchartsTheme from './HighchartsTheme';
import ChartSelect from './ChartSelect';

ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

export default function PriceChart() {
  return (
    <AppContext.Consumer>
      {({ currentFavorite, historical, changeChartSelect, timeInterval }) => (
        <Tile>
          <ChartSelect
            defaultValue={timeInterval}
            onChange={(e) => changeChartSelect(e.target.value)}
          >
            <option value="days">Days</option>
            <option value="weeks">Weeks</option>
            <option value="months">Months</option>
          </ChartSelect>
          {historical ? (
            <ReactHighcharts
              config={highchartsConfig(currentFavorite, historical)}
            />
          ) : (
            <div>Loading Historical Data</div>
          )}
        </Tile>
      )}
    </AppContext.Consumer>
  );
}
