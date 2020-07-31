import { makeGrid, getRandomCoordinate, getDirections, getRandomNumber } from '../../helpers/generateBoard'

describe('matrix creation', () => {
    it('should set a 10 x 10 matrix of null values', () => {
        expect(expectedMatrix).toEqual(
            makeGrid()
        );
        expect(noDepthGrid).not.toEqual(
            makeGrid()
        );
        expect(noNullGrid).not.toEqual(
            makeGrid()
        );
    })
});

const expectedMatrix = [
    [
        null, null, null,
        null, null, null,
        null, null, null,
        null
    ],
    [
        null, null, null,
        null, null, null,
        null, null, null,
        null
    ],
    [
        null, null, null,
        null, null, null,
        null, null, null,
        null
    ],
    [
        null, null, null,
        null, null, null,
        null, null, null,
        null
    ],
    [
        null, null, null,
        null, null, null,
        null, null, null,
        null
    ],
    [
        null, null, null,
        null, null, null,
        null, null, null,
        null
    ],
    [
        null, null, null,
        null, null, null,
        null, null, null,
        null
    ],
    [
        null, null, null,
        null, null, null,
        null, null, null,
        null
    ],
    [
        null, null, null,
        null, null, null,
        null, null, null,
        null
    ],
    [
        null, null, null,
        null, null, null,
        null, null, null,
        null
    ]
];

const noDepthGrid = [],
    noNullGrid = [[], [], [], [], [], [], [], [], [], []];

expect.extend({
    toBeWithinRange(received, floor, ceiling) {
        const pass = received >= floor && received <= ceiling;
        if (pass) {
            return {
                message: () =>
                    `expected ${received} not to be within range ${floor} - ${ceiling}`,
                pass: true,
            };
        } else {
            return {
                message: () =>
                    `expected ${received} to be within range ${floor} - ${ceiling}`,
                pass: false,
            };
        }
    }
});

describe('creating random coordinates', () => {
    const coords = getRandomCoordinate();

    it('should return a pair of random number coordinates', () => {
        expect(coords).toHaveLength(2);
        expect(coords).not.toHaveLength(3);
        expect(coords).not.toHaveLength(1);
        expect(coords).not.toHaveLength(0);
    });

    it('should contain numbers within the range 0 - 9 inclusive', () => {
        expect(coords[0]).toBeWithinRange(0, 9);
        expect(coords[1]).toBeWithinRange(0, 9);
        expect(10).not.toBeWithinRange(0, 9);
    });
});

describe('creating random sequence of directions', () => {
    const directions = getDirections();

    it('should return an array of length 4', () => {
        expect(directions).toHaveLength(4);
        expect(directions).not.toHaveLength(5);
        expect(directions).not.toHaveLength(3);
        expect(directions).not.toHaveLength(2);
        expect(directions).not.toHaveLength(1);
        expect(directions).not.toHaveLength(0);
    });

    it('should contain numbers within the range 0 - 3 inclusive', () => {
        expect(directions[0]).toBeWithinRange(0, 3);
        expect(directions[1]).toBeWithinRange(0, 3);
        expect(directions[2]).toBeWithinRange(0, 3);
        expect(directions[3]).toBeWithinRange(0, 3);
        expect(4).not.toBeWithinRange(0, 3);
    });
});

it('should return a random number in a range from 0 to the max param', () => {
    expect(getRandomNumber(5)).toBeWithinRange(0, 5);
    expect(getRandomNumber(3)).toBeWithinRange(0, 3);
    expect(getRandomNumber(14)).toBeWithinRange(0, 14);
})