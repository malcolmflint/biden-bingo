console.log(document.getElementById('chartArea'));
let width = 850,
    height = 1100;

let gridX = 86,
    gridY = 332,
    gridWidth = 676;

let gridScale = d3.scaleLinear()
    .domain([0, 5])
    .range([0, gridWidth]);


let svg = d3.select('#chartArea')
    .append('svg')
    .attr('id', 'card')
    .attr('preserveAspectRation', 'xMinYMin meet')
    .attr('viewBox', '0 0 850 1100');

svg.append('svg:image')
    .attr('xlink:href', 'static/board.png')
    .attr('width', width)
    .attr('height', height);


const numEntries = 91;
let paths = [];
for (let i = 0; i < numEntries; i++) {
    paths.push(`static/squares/bingo_squares${i}.png`)
}
for (let x = 0; x < 5; x++) {
    for (let y = 0; y < 5; y++) {
        const demandNum = Math.floor(Math.random() * paths.length);
        const demandPath = paths.splice(demandNum, 1);

        svg.append('svg:image')
            .attr('xlink:href', demandPath)
            .attr('x', gridX + gridScale(x))
            .attr('y', gridY + gridScale(y))
            .attr('width', gridScale(1))
            .attr('height', gridScale(1));
    }
}

d3.select('#downloadButton').on('click', function () {
    saveSvgAsPng(document.getElementById('card'), 'bingoCard.png');
});
