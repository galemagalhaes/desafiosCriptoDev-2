const { expect } = require('chai')
const rgbToHex = require('../../components/rgbToHex.js')

const mockDados = "rgb(255,255,255)"
const mockResposta = "#ffffff"

describe("Teste da função rgbToHex", () => {
  it(`Deve renderizar ${mockResposta} ao passar ${mockDados} na função `, () =>{
    const resposta = rgbToHex.rgbToHex(mockDados)
    expect(resposta).to.equals(mockResposta)
  }) 
})