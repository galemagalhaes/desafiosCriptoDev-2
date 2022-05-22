
function hexToRgb(hex) {
    let hex_color = hex.replace("#", "")
    let r = parseInt(hex_color.substring(0, 2), 16)
    let g = parseInt(hex_color.substring(2, 4), 16)
    let b = parseInt(hex_color.substring(4, 6), 16)
    let rgbSaida = 'rgb(' + r + ',' + g + ',' + b + ')'
    return rgbSaida
}

module.exports = {
    hexToRgb
}