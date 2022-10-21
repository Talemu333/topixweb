const express = require("express")
const app = express()
const cors = require("cors")
const validator = require("validator")
const User = require("./app.js")
const port = process.env.PORT || 3000

app.use(express.json())
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
app.use(cors(corsOptions)) // Use this after the variable declaration



app.get('/bookonline', async(req, res) =>{
    const name = await req.query.name 
    const email = await req.query.email
    const phone = await req.query.phone
    const location = await req.query.location
    const product = await req.query.product
    const comment = await req.query.comment
    const user = await new User({name,email,phone,location,product,comment})
    
    user.save().then(() => {
        
        res.send(user)
    }).catch((e) => {
        res.send(e)
    })
})
    
app.listen(port, () => {
    console.log('listening on port ' + port + '...')
})
