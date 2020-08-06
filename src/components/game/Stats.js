import React from 'react';
import styled from 'styled-components/macro';

const FleetHeader = styled.div`
    color: rgba(23, 144, 205, 1);
    font-size: 1.6em;
    font-weight: 500;
`

function Stats(props) {
    return (
        <>
            <FleetHeader>Fleet</FleetHeader>
            <div>
                <div>Aircraft</div>
                <div>Battleship</div>
                <div>Submarine</div>
                <div>Cruiser</div>
                <div>Carrier</div>
            </div>
            <div>
                <div>O O O O O</div>
                <div>O O O O</div>
                <div>O O O</div>
                <div>O O O</div>
                <div>O O</div>
            </div>
        </>
    )
}

export default Stats;