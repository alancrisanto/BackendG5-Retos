import express, {json} from "express";

const app = express();
app.use(json());

const libros = [];

const PORT = 3000;

app.get("/", (req, res) => {
    
    try {
        res.status(200).json({
            message: "Peticion realizada correctamete",
            content: libros,
        });
    } catch (error) {
        console.log(error)
        res.status(401).json({
            message: "Error al solicitar informacion"
        })
    }
});

app.post("/libro", (req, res) => {
    console.log(req.body)
    try {
        libros.push(req.body);
        res.status(201).json({
            message: "Libro agregado correctamente",
            libro: req.body,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "Informacion incorrecta"
        });
    };
});

app.put("/libro/:id", (req, res) => {
    const {id} = req.params;
    if (libros[id - 1]){
        libros[id - 1] = req.body;

        return res.status(200).json({
            message: "Libro actualizado correctamente",
            content: libros[id - 1],
        });
    }else {
        return res.status(401).json({
            message: "Producto no existe",
            content: null,
        })
    }
});

app.delete("/libro/:id", (req, res) => {

        const { id } = req.params;
        if (libros[id - 1]) {
        const libro = libros[id - 1];

        libros.splice(id - 1, 1);

        return res.status(200).json({
            message: "Libro eliminado exitosamente",
            content: libro,
        });
        } else {
        return res.status(400).json({
            message: "Libro no existe",
            content: null,
        });
    }
})

app.listen(PORT, () => {
    console.log(`servidor ejecutandose en el puerto ${PORT}`)
});