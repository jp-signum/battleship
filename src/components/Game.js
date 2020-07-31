import React, { Component } from 'react';
import _ from 'lodash';

import Board from './Board/Board'

import { ships } from '../constants/ships'

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: null,
            fleet: null,
            shots: 0,
            hits: 0,
            sunk: 0,
            remaining: 5,
            gameOver: false
        }
    }

    newGame() {
        let newFleet = _.cloneDeep(ships);
        this.setState({
            fleet: newFleet
        });
    }

    render() {
        let { grid, fleet, shots, hits } = this.state;

        return (
            <>
                hello
            </>
        );
    }
}

export default Game;