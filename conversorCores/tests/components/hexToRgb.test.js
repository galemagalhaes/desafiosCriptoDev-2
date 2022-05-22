const { expect } = require('chai')
const hexToRgb = require('../../components/hexToRgb')

const mockDados = "#ffffff"
const mockResposta = "rgb(255,255,255)"

describe("Teste da função hexToRgb", () => {
  it(`Deve renderizar ${mockResposta} ao passar ${mockDados} na função `, () =>{
    const resposta = hexToRgb.hexToRgb(mockDados)
    expect(resposta).to.equals(mockResposta)
  }) 
})