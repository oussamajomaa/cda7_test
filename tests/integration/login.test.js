const request = require('supertest')
const {app} = require('../../app')

describe("Tester /login", ()=>{
    it("Devrait retourner 200 si l'email contient @ et le pw est >=8",async ()=>{
        const res = await request(app)
            .post('/login')
            .send({email:"osm@osm.com",password:"12345678"})
            .expect(200)
        expect(res.body.message).toBe('Connexion réussie ')
    })
    it("Devrait retourner 400 si l'email ne contient pas  @ ou le pw est <8",async ()=>{
        const res = await request(app)
            .post('/login')
            .send({email:"osm@osm.com",password:"1234567"})
            .expect(400)
        expect(res.body.message).toBe('Email ou password invalides !')
    })
})