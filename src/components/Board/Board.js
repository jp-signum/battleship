import React from 'react';

import Cell from './Cell'

function Board({ board, onCellClick }) {
    return (
        <>
            <table cellSpacing={0}>
                <tbody>
                    {board.map((row, x) => {
                        return (
                            <tr key={x}>{row.map((column, y) => {
                                return (
                                    <td key={y}>
                                        <Cell x={x} y={y} cellState={column}
                                            onCellClick={() => onCellClick(x, y)} />
                                    </td>
                                )
                            })}</tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Board;