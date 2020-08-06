import React from 'react';
import styled from 'styled-components/macro';

import Health from './Health';

const StatContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px lightgrey solid;
    height: 454px;
    width: 100px;
    margin-right: 20px;
`

const FleetHeader = styled.div`
    color: rgba(23, 144, 205, 1);
    font-size: 1.6em;
    font-weight: 500;
`

const ShipStat = styled.div`
    margin: 10px 0px;
`

function Stats({ fleet }) {
    return (
        <StatContainer>
            <FleetHeader>Fleet</FleetHeader>
            {
                fleet.map((ship, index) => {
                    return (
                        <ShipStat key={index}>
                            <div>{ship.name}</div>
                            <Health health={ship.health - ship.hits} hits={ship.hits} />
                        </ShipStat>
                    )
                })
            }
        </StatContainer>
    )
}

export default Stats;