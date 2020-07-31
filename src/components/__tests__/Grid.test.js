import React from 'react';

import Grid from '../grid/Grid'

import { getGrid } from '../grid/Grid'

// should set grid to be a multidimensional array with 10 rows & columns
// should set all elements of grid to null
const nullGrid = [
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
]

test('should set grid to be a multidimensional array of depth 10 containing null at every cell', () => {
    expect(nullGrid).toEqual(
        getGrid()
    );
});