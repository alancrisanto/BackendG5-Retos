import mongoose from "mongoose";

const URL = 'mongodb://localhost/admin'

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

export const conexion = mongoose.connection


