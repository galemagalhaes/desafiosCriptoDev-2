var readline = require('readline');

var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

leitor.question("Digite a cor em hexadecimal\n", function(answer) {
  var resp = answer;
  console.log(hexRgb(resp))
  leitor.close();
});

function hexRgb(resp){
  let hex_color = resp.replace("#", "")
  let r = parseInt(hex_color.substring(0,2),16)
  let g = parseInt(hex_color.substring(2,4),16)
  let b = parseInt(hex_color.substring(4,6),16)
  let rgbSaida = 'rgb('+ r +',' + g + ',' + b +')'
  return rgbSaida
}