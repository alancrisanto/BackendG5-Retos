import express, { json } from "express";
import jwt from "jsonwebtoken";



const app = express();
app.use(json());

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Se conecto correctamente",
    })
});

app.post('/login', (req, res) => {
    const user = {id: 3};
    const token = jwt.sign({user}, 'my_secret_token')
    res.status(200).json({
        token
    });
});

app.get('/protegido', verificarToken, (req, res) => {
    jwt.verify(req.token, "my_secret_token", (error, data) =>{
        if (error) {
            res.status(401).json({
                message: "Usuario prohibido",
            })
        } else {
            res.status(200).json({
                message: "Ruta protegida",
                data: data,
            })
        }
    })
});


function verificarToken (req, res, next) {
    const bearerHeader = req.headers['authorization'];
    console.log(bearerHeader)

    if (typeof bearerHeader != 'undefined'){
        const token = bearerHeader.split(" ")[1];
        req.token = token;
        next()
    } else {
        res.status(401).json({
            message: "No permitido",
        })
    }

}


app.listen(3000, () => {
    console.log("Server on port 3000")
})
