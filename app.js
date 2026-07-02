const express = require('express')

const app = express()
app.use(express.json())
app.use(express.static('public'))

app.post('/login', (req,res)=>{
    const {email,password} = req.body

    if (!verifyEmail(email) || !verifyPassword(password)){
        return res.status(400).json({message:"Email ou password invalides !"})
    }
    res.status(200).json({message: "Connexion réussie !"})

})


function verifyEmail(email){
    return email.includes('@')
}

function verifyPassword(password){
    return password.length >= 8
}
module.exports = {verifyEmail, verifyPassword, app}