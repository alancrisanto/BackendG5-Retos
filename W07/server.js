import mongoose from 'mongoose';
import express, {json} from 'express';
import adminBro from 'admin-bro';
import AdminJS  from 'adminjs';
import AdminJSExpress from '@adminjs/express'
import AdminJSMongoose from '@adminjs/mongoose'

import { conexion } from './Mongo/db.js';
import { Usuario } from './models/user.js';

const PORT = process.env.PORT ?? 3000
const app = express()

//Conexion a la DB

conexion.once('open', () => console.log("Conexion exitosa") );
conexion.on('error', () => console.log("El error de conexion es:" + error));

// AdminBro
// const adminJs = new AdminJS({
//     databases: [],
//     rootPath: '/admin',
// })

AdminJS.registerAdapter(AdminJSMongoose)

const adminJsOptions = {
    resources: [Usuario],
}

const adminJs = new AdminJS(adminJsOptions)
const router = AdminJSExpress.buildRouter(adminJs)

app.use(adminJs.options.rootPath, router);


app.get('/', (req,res) => {
    res.status(200).json({
        message: "Corriendo en Node"
    })
})

app.listen(PORT, () => {
    console.log(`El servidor esta corriendo en el puerto ${PORT}/admin`)
})
