import React from 'react';
import styled from 'styled-components'


const CellUnitDisplay = styled.div`
    height: 40px;
    width: 40px;
    border: ${props => props.hit ? '2px solid red !important' : '1px dashed blue !important'} ;
    pointer-events: none;
`

const CellUnit = styled.div`
    height: 40px;
    width: 40px;
    border: 2px solid black;

    :hover{
        cursor: pointer;
    }
`

function Cell({ onCellClick, cellState, x, y }) {

    const displayFire = (x, y, cellState) => {
        if (cellState !== 'miss' && cellState !== 'hit') {
            onCellClick(x, y);
        }
    }

    let cell;

    if (cellState === 'hit') {
        cell = <CellUnitDisplay hit onClick={() => displayFire(x, y, cellState)}></CellUnitDisplay>
    } else if (cellState === 'miss') {
        cell = <CellUnitDisplay onClick={() => displayFire(x, y, cellState)}></CellUnitDisplay>
    } else {
        cell = <CellUnit onClick={() => displayFire(x, y, cellState)} />
    }


    return (
        <>
            {cell}
        </>
    );
}


export default Cell;
