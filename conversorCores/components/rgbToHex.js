
function rgbToHex(rgb) {
    var array = rgb.substring(4,rgb.length-1).split(',')
    return convertRgb(array[0], array[1], array[2])
}

function convertRgb(r,g,b) {
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