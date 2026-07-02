const {verifyPassword} = require('../../app')

describe("verifyPassword",()=>{
    test('Devrait retourner true si la longueur est supérieur ou égal 8', ()=>{
        expect(verifyPassword('12345678')).toBe(true)
    })
    test("Devrait retourner false si la longueur est inférieur à 8", ()=>{
        expect(verifyPassword('1234568')).toBe(false)
    })
})