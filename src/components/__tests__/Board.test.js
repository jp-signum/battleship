import { makeGrid, getRandomCoordinate } from '../Board/Board'

describe('grid creation', () => {
    it('should set a 10 x 10 matrix of null values', () => {
        expect(expectedGrid).toEqual(
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

const expectedGrid = [
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

describe('creating random coordinates to start the ship placing process', () => {
    const coords = getRandomCoordinate();

    it('should return a pair of random number coordinates', () => {
        expect(getRandomCoordinate()).toHaveLength(2);
        expect(getRandomCoordinate()).not.toHaveLength(3);
        expect(getRandomCoordinate()).not.toHaveLength(1);
        expect(getRandomCoordinate()).not.toHaveLength(0);
    });

    it('should contain numbers within the range 0 - 9 inclusive', () => {
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

        expect(coords[0]).toBeWithinRange(0, 9);
        expect(coords[1]).toBeWithinRange(0, 9);
        expect(10).not.toBeWithinRange(0, 9);
    });
});