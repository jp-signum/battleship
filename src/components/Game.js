import React, { Component } from 'react';
import styled from 'styled-components/macro';
import _ from 'lodash';

import Stats from './Stats'
import Board from './Board/Board';

import media from '../theme/DeviceWidth'

import { ships } from '../constants/ships';
import { makeBoard } from '../helpers/generateBoard';


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
            board: null,
            fleet: null,
            gameOver: false
        }
    }

    componentWillMount() {
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
        let { fleet, board } = this.state
        // console.log(this.state)

        return (
            <GameContainer >
                <Stats fleet={fleet} />
                <Board board={board} />
            </GameContainer>
        );
    }
}

export default Game;