import React, { Component } from 'react';
import _ from 'lodash';

import Board from './Board/Board';

import { ships } from '../constants/ships';
import { makeBoard } from '../helpers/generateBoard';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: null,
            fleet: null,
            shots: 0,
            hits: 0,
            sunk: 0,
            remaining: 5,
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

    render() {
        console.log(this.state)
        return (
            <>
                <Board />
            </>
        );
    }
}

export default Game;