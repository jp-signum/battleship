import React from 'react';
import styled from 'styled-components/macro';

import Cell from './Cell'

const BoardContainer = styled.div`
    
`

const BoardBox = styled.td`
    
`

function Board({ board, onCellClick }) {
    console.log(board)

    return (
        <BoardContainer>
            <table cellSpacing={0}>
                <tbody>
                    {board.map((row, x) => {
                        return (
                            <tr key={x}>{row.map((column, y) => {
                                return (
                                    <BoardBox key={y}>
                                        <Cell x={x} y={y} cellState={column}
                                            onCellClick={() => onCellClick(x, y)} />
                                    </BoardBox>
                                )
                            })}</tr>
                        )
                    })}
                </tbody>
            </table>
        </BoardContainer>
    )
}

export default Board;