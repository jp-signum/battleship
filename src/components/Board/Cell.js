const getRandomCoordinate = () => {
    const MAX = 9;

    return [Math.floor(Math.random() * MAX), Math.floor(Math.random() * MAX)]
};

console.log(getRandomCoordinate())
