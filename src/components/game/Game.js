import React, { Component } from 'react';
import styled from 'styled-components/macro';
import _ from 'lodash';

import Stats from './Stats'
import Board from '../board/Board';

import media from '../../theme/DeviceWidth';

import { ships } from '../../constants/ships';
import { makeBoard, makeClone } from '../../helpers/generateBoard';


const GameContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    ${media.phone`
        flex-direction: row;
    `}
`

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: [],
            fleet: null,
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

    onCellClick(x, y) {
        let newBoard = makeClone(this.state.board);
        // let hits = this.state.hits;
        let newFleet = [...this.state.fleet];
        let cellValue = this.state.board[x][y];

        if (cellValue >= 10) {
            switch (cellValue) {
                case 10:
                    newFleet[0].hits = newFleet[0].hits + 1;
                    break;
                case 20:
                    newFleet[1].hits = newFleet[1].hits + 1;
                    break;
                case 30:
                    newFleet[2].hits = newFleet[2].hits + 1;
                    break;
                case 40:
                    newFleet[3].hits = newFleet[3].hits + 1;
                    break;
                case 50:
                    newFleet[4].hits = newFleet[4].hits + 1;
                    break;
                default: 
                    break;
            }

            newBoard[x][y] = 'hit';
            // hits += 1;
            this.setState({
                board: newBoard,
                fleet: newFleet
            })
        } else {
            newBoard[x][y] = 'miss';
            this.setState({
                board: newBoard
            })
        }
    }

    render() {
        let { fleet, board } = this.state
        // console.log(this.state)

        return (
            <GameContainer>
                <Stats fleet={fleet} />
                <Board board={board} onCellClick={(x, y) => this.onCellClick(x, y)} />
            </GameContainer>
        );
    }
}

export default Game;