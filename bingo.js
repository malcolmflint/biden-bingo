let width = 850,
    height = 1100;

let gridX = 86,
    gridY = 332,
    gridWidth = 676;

let gridScale = d3.scaleLinear()
    .domain([0, 5])
    .range([0, gridWidth]);


let svg = d3.select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

svg.append('svg:image')
    .attr('xlink:href', 'board.png')
    .attr('width', width)
    .attr('height', height);


const numEntries = 91;
for (let x = 0; x < 5; x++) {
    for (let y = 0; y < 5; y++) {
        const demandNum = Math.floor(Math.random() * numEntries);
        const demandPath = `squares/bingo_squares${demandNum}.png`;

        svg.append('svg:image')
            .attr('xlink:href', demandPath)
            .attr('x', gridX + gridScale(x))
            .attr('y', gridY + gridScale(y));
    }
}
