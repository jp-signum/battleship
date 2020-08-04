import React, { Component } from 'react';

class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onClick(x, y, cellState) {
       
    }

    render() {
        let { cellState, onCellClick, x, y } = this.props;
        return (
            <div >
               
            </div>
        );
    }
}

export default Cell;
