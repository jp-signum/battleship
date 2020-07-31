import { ships } from '../constants/ships'

// create a playable board containing randomly placed ships
const makeBoard = () => {
    board = makeGrid()

    for (let i = 0; i < ships.length; i++) {
        board = generateShipPositions(ships[i], board)
    }

    return board;
};


// create a 10 x 10 matrix of null value
const makeGrid = () => {
    let grid = [10];

    for (let i = 0; i < 10; i++) {
        grid[i] = [10];
        for (let j = 0; j < 10; j++) {
            grid[i][j] = null;
        }
    }

    return grid;
};


// makes clone of current board to check positions against
const makeClone = (grid) => {
    let clone = [10];

    for (let i = 0; i < 10; i++) {
        clone[i] = [10];
        for (let j = 0; j < 10; j++) {
            clone[i][j] = grid[i][j];
        }
    }

    return clone;
};


// generates random ship positions
const generateShipPositions = (ship, board) => {
    let initialShipPos = null,
        continueLoop = true;

    while (continueLoop) {
        initialShipPos = getRandomCoordinate();

        if (positionIsFree(board, initialShipPos)) {
            let x = initialShipPos[0],
                y = initialShipPos[1],
                directions = getDirections();

            board[x][y] = ship.id;
            board = refillNeighbourCells(board, x, y, ship.id);

            for (let i = 0; i < directions.length; i++) {
                let tempBoard = makeClone(board),
                    newBoard = tryDirections(directions[i], ship, shipStartPosition, tempBoard);

                if (newBoard !== null) {
                    continueLoop = false;
                    board = [...newBoard];
                    break;
                } else {
                    tempBoard = newBoard = null;
                }
            }
        }
    }

    return board;
};


// returns random coordinate
const getRandomCoordinate = () => {
    const MAX = 9;

    return [Math.floor(Math.random() * MAX), Math.floor(Math.random() * MAX)]
};


// checks pos, returning true if pos is free
const positionIsFree = (grid, pos) => {
    let x = pos[0],
        y = pos[1];

    return !(grid[x][y] > 0);
};


// returns random sequence of ship placing directions
const getDirections = () => {
    let directions = [];

    for (let i = 0; directions.length < 4; i++) {
        let num = getRandomNumber(4);

        if (directions.indexOf(num) === -1) {
            directions.push(num);
        }
    }

    return directions;
};


// returns random number in range from 0 to max param
const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max)
};


// marks neighbouring cells of initial pos
const refillNeighbourCells = (grid, x, y, shipId) => {
    if (y < 9 && grid[x][y + 1] === null) {
        grid[x][y + 1] = shipId;
    }

    if (x < 9 && y < 9 && grid[x + 1][y + 1] === null) {
        grid[x + 1][y + 1] = shipId;
    }

    if (x < 9 && grid[x + 1][y] === null) {
        grid[x + 1][y] = shipId;
    }

    if (x < 9 && y > 0 && grid[x + 1][y - 1] === null) {
        grid[x + 1][y - 1] = shipId;
    }

    if (y > 0 && grid[x][y - 1] === null) {
        grid[x][y - 1] = shipId;
    }

    if (x > 0 && y > 0 && grid[x - 1][y - 1] === null) {
        grid[x - 1][y - 1] = shipId;
    }

    if (x > 0 && grid[x - 1][y] === null) {
        grid[x - 1][y] = shipId;
    }

    if (x > 0 && y < 9 && grid[x - 1][y + 1] === null) {
        grid[x - 1][y + 1] = shipId;
    }

    return grid;
};

const tryDirections = (dir, ship, initialShipPos, board) => {
    let x = initialShipPos[0],
        y = initialShipPos[1],
        wrongDir = false;

    for (let i = 1; i < ship.size; i++) {
        switch (dir) {
            case 0:
                if (y + i > 9) {
                    wrongDir = true;
                    break;
                } else if (positionIsFree(board, [x, y + i]) || board[x][y + i] === ship.id) {
                    board[x][y + i] = ship.id;
                    refillNeighbourCells(board, x, y + i, ship.id);
                    wrongDir = false;
                    break;
                } else {
                    wrongDir = true;
                    break;
                }
            case 1:
                if (x + i > 9) {
                    wrongDir = true;
                    break;
                } else if (positionIsFree(board, [x + i, y]) || board[x + i][y] === ship.id) {
                    board[x + i][y] = ship.id;
                    refillNeighbourCells(board, x + i, y, ship.id);
                    wrongDir = false;
                    break;
                } else {
                    wrongDir = true;
                    break;
                }
            case 2:
                if (y - i < 0) {
                    wrongDir = true;
                    break;
                } else if (positionIsFree(board, [x, y - i]) || board[x][y - i] === ship.id) {
                    board[x][y - i] = ship.id;
                    refillNeighbourCells(board, x, y - i, ship.id);
                    wrongDir = false;
                    break;
                } else {
                    wrongDir = true;
                    break;
                }
            case 3:
                if (x - i < 0) {
                    wrongDir = true;
                    break;
                } else if (positionIsFree(board, [x - i, y]) || board[x - i][y] === ship.id) {
                    board[x - i][y] = ship.id;
                    refillNeighbourCells(board, x - i, y, ship.id);
                    wrongDir = false;
                    break;
                } else {
                    wrongDir = true;
                    break;
                }

            default:
                break;
        }
    }

    if (wrongDir) {
        return null;
    } else {
        return board;
    }
}

module.exports = {
    makeBoard: makeBoard,
    makeGrid: makeGrid,
    getRandomCoordinate: getRandomCoordinate,
    getDirections: getDirections,
    getRandomNumber: getRandomNumber,
    makeClone: makeClone
}