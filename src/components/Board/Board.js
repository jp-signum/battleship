import React from 'react';
import styled from 'styled-components/macro';

import Cell from './Cell'

const BoardContainer = styled.div`
    
`

function Board({ board }) {
    console.log(board)
    return (
        <BoardContainer>
            <table>
                <tbody>
                    {board.map((row, x) => {
                        return (
                            <tr key={x}>{row.map((column, y) => {
                                return (
                                    <td
                                        key={y}
                                        className='tableCell'>
                                        <Cell
                                            
                                            x={x}
                                            y={y}
                                            cellState={column} />
                                    </td>
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