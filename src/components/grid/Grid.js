import { ships } from '../../constants/ships'

// going to create a multidimensional array by first creatign a one dimensional array of depth 10
// then loop through that array and make each one hold another 10 depth array
export const getGrid = () => {
    let grid = [10];

    for (let i = 0; i < 10; i++) {
        grid[i] = [10];
        for (let j = 0; j < 10; j++) {
            grid[i][j] = null;
        }
    }

    return grid;
}
