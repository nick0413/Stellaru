import React from 'react';

import Chart from '../Chart';
import LineChart from '../LineChart';
import {selectNested} from '../Util';
import {registerChart} from '../../ChartRegistry';
import {translate} from '../../../Translator';

const Name = 'Leading Federation';

function LeadingFederation(props) {
    const name = props.name ? props.name : 'LeadingFederation';
    const data = props.data;

    const lines = [
        {
            label: translate('Currently Leader'),
            selector: snap => selectNested('federation/leader', snap) ? 1 : 0,
        }
    ];

    const formatter = value => {
        if (value === 0) return 'False';
        if (value === 1) return 'True';
        return '';
    };

    return (
        <Chart name={Name} overlay={props.overlay} title={translate('Leading Federation')} titleColor='#127814'>
            <LineChart
                name={name}
                data={data}
                allowIsolation={true}
                formatter={formatter}
                lines={lines}
            />
        </Chart>
    );
}

registerChart(
    Name,
    'Shows when currently leading a federation',
    LeadingFederation
);

export default LeadingFederation;
