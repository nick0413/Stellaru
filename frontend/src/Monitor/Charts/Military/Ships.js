import React from 'react';

import Chart from '../Chart';
import AreaChart from '../AreaChart';
import {registerChart} from '../../ChartRegistry';
import {findKeysOverSeries, selectNested} from '../Util';

function Ships(props) {
    const name = props.name ? props.name : 'ships';
    const data = props.data;

    const keys = findKeysOverSeries(data, 'fleets/ship_types');
    const lines = keys.map(key => {
        return {
            label: key,
            selector: snap => selectNested(`fleets/ship_types/${key}`, snap)
        };
    });

    return (
        <Chart overlay={props.overlay} title='Ship Types' titleColor='#de1212'>
            <AreaChart
                name={name}
                data={data}
                areas={lines}
                stack={true}
                allowIsolation={true}
            />
        </Chart>
    );
}

registerChart(
    'Ship Types',
    'Displays number of ships by type over time',
    Ships
);

export default Ships;