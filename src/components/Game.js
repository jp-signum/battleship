import React, { Component } from 'react';

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