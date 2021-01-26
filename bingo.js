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

d3.csv('demands.csv', function (d) {
    return d.demand;
}).then(function(data) {
    console.log(data);
    let bingoSquares = Array();
    for (let x = 0; x < 5; x++) {
        for (let y = 0; y < 5; y++) {
            let demand = '';
            if (x === 2 && y === 2) {
                demand = 'Free Space!';
            } else {
                const demandNum = Math.floor(Math.random() * data.length);
                // demand = data.splice(demandNum, 1);
                demand = demandNum;
            }
            let demandBox = svg.append('g');

            demandBox.append('text')
                .attr('x', gridX + gridScale(x + 0.5))
                .attr('y', gridY + gridScale(y + 0.5))
                .attr('dominant-baseline', 'middle')
                .attr('text-anchor', 'middle')
                .text(demand);
        }
    }
    // d3.selectAll('text').data(bingoSquares).enter()
    //     .append('text')
    //     .
});
