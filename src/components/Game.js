import React, { Component } from 'react';
import styled from 'styled-components/macro';
import _ from 'lodash';

import Stats from './details/Stats'
import Board from './board/Board';

import media from '../theme/DeviceWidth';

import { ships } from '../constants/ships';
import { makeBoard, makeClone } from '../helpers/generateBoard';


const GameContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    ${media.tablet`
        flex-direction: row;
        margin: 12vh 0vh 0vh -10vw;
    `}
`

const ResetButton = styled.div`

`

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: [],
            fleet: [],
            hits: 0,
            gameOver: false
        }
    }

    componentDidMount() {
        this.newGame();
    }

    newGame() {
        let newFleet = _.cloneDeep(ships);
        this.setState({
            board: makeBoard(),
            fleet: newFleet
        });
    }

    resetGame() {
        let newFleet = _.cloneDeep(ships);
        this.setState({
            board: makeBoard(),
            fleet: newFleet,
            hits: 0,
            gameOver: false
        });
    }

    onCellClick(x, y) {
        let newBoard = makeClone(this.state.board),
            newFleet = [...this.state.fleet],
            cellValue = this.state.board[x][y];

        if (cellValue >= 10) {
            switch (cellValue) {
                case 10:
                    newFleet[0].hits += 1;
                    break;
                case 20:
                    newFleet[1].hits += 1;
                    break;
                case 30:
                    newFleet[2].hits += 1;
                    break;
                case 40:
                    newFleet[3].hits += 1;
                    break;
                case 50:
                    newFleet[4].hits += 1;
                    break;
                default:
                    break;
            }

            newBoard[x][y] = 'hit';

            if (this.state.hits === 17) {
                this.setState({
                    gameOver: true
                })
            } else {
                this.setState((prevstate) => ({
                    board: newBoard,
                    fleet: newFleet,
                    hits: prevstate.hits + 1
                }))
            }
        } else {
            newBoard[x][y] = 'miss';

            this.setState({
                board: newBoard
            })
        }
    }

    render() {
        let { fleet, board } = this.state;
        console.log(this.state)
        return (
            <>
                {this.state.gameOver
                    ? <div>
                        <h1>Game Over</h1>
                        <ResetButton>Play Again?</ResetButton>
                    </div>
                    : <GameContainer>
                        <Stats fleet={fleet} />
                        <Board board={board} onCellClick={(x, y) => this.onCellClick(x, y)} />
                    </GameContainer>
                }
            </>
        );
    }
}

export default Game;