import React from 'react';

import Chart from '../Chart';
import AreaChart from '../AreaChart';
import {selectNested} from '../Util';
import {registerChart} from '../../ChartRegistry';
import {translate} from '../../../Translator';

const Name = 'Leaders';

function Leaders(props) {
    const name = props.name ? props.name : 'leaders';
    const data = props.data;

    const areas = [
        {
            label: translate('Scientist'),
            selector: snap => selectNested('leaders/scientist', snap)
        },
        {
            label: translate('Admiral'),
            selector: snap => selectNested('leaders/admiral', snap)
        },
        {
            label: translate('General'),
            selector: snap => selectNested('leaders/general', snap)
        },
        {
            label: translate('Envoy'),
            selector: snap => selectNested('leaders/envoy', snap)
        },
        {
            label: translate('Governor'),
            selector: snap => selectNested('leaders/governor', snap)
        },
        {
            label: translate('Ruler'),
            selector: snap => selectNested('leaders/ruler', snap)
        },
    ];

    return (
        <Chart name={Name} overlay={props.overlay} title={translate('Leaders')} titleColor='#65c73c'>
            <AreaChart
                name={name}
                data={data}
                allowIsolation={true}
                stack={true}
                areas={areas}
            />
        </Chart>
    );
}

registerChart(
    Name,
    'Shows leader count and breakdown over time',
    Leaders
);

export default Leaders;
