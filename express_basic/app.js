const express = require('express') //estamos usando valores7objetos de express

const app = express()   //los datos de exprees los pasamos a app "lo convertimos app"

const port = 3000  //el puerto que usaremos para express

app.get('/',(req,res)=>{   //path que respondera la url localhost la diagonal indica localhost
    res.send('Hello world')
})

app.get('/launchx',(req,res)=>{   //path que respondera la url localhost/launchx
    res.send('Bienvenido a launch')
})


app.listen(port,()=>{          //inicializamos la app express  
    console.log(`example en port ${port}`)
})