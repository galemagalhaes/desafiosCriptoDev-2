var readline = require('readline');

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Digite a cor em rgb\n", function(answer) {
    var rgb = answer;
    var array = rgb.split(',')
    var hexSaida = rgbToHex(array[0], array[1], array[2])
    console.log(hexSaida)
    leitor.close();
});

function rgbToHex(r, g, b) {
    let x = parseInt(r)
    let y = parseInt(g)
    let z = parseInt(b)
    var convert = [x, y, z].map(x => {
        const hex = x.toString(16)
        return hex.length === 1 ? '0' + hex : hex
    }).join('')
    return '#' + convert
}


module.exports = {
    rgbToHex
}