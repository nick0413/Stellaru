import React from 'react';

import EmpireSize from '../Charts/Empire/EmpireSize';
import ColonyAges from '../Charts/Empire/ColonyAges';
import ColonyStats from '../Charts/Empire/ColonyStats';
import ColonySizes from '../Charts/Empire/ColonySizes';
import ColonyStability from '../Charts/Empire/ColonyStability';
import Colonies from '../Charts/Empire/Colonies';

function Empire(props) {
    const data = props.data;

    return (
        <div className='monitorTab'>
            <div className='row chartRow'>
                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-3 chartCol presetChart'>
                    <EmpireSize data={data}/>
                </div>
                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-3 chartCol presetChart'>
                    <Colonies data={data}/>
                </div>
                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-3 chartCol presetChart'>
                    <ColonyAges data={data}/>
                </div>
                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 chartCol presetChart'>
                    <ColonyStats data={data}/>
                </div>
                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 chartCol presetChart'>
                    <ColonyStability data={data}/>
                </div>
                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 chartCol presetChart'>
                    <ColonySizes data={data}/>
                </div>
            </div>
        </div>
    );
}

export default Empire;