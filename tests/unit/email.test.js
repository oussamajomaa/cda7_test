const {verifyEmail} = require('../../app')

describe("Fonction verifyEmail",()=>{
    it("devrait retourner true si l'email contient un '@'",()=>{
        expect(verifyEmail('osm@osm.com')).toBe(true)
    })
    it("Devrait retourner false si l'email ne contient pas un '@'",()=>{
        expect(verifyEmail('osm.com')).toBe(false)
    })
})