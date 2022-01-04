import { Offcanvas, Button, Form, Table } from "react-bootstrap"
import {useEffect, useState} from "react"

import { obt_personal, agregar_personal } from "../services/obt_data";

export default function Principal() {

    // This handle to open and close the acordeon
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    // const for the form
    const [nombres, setNombres] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [dni, setDni] = useState("");
    const [area, setArea] = useState("");
    const [fechaIngreso, setFechaIngreso] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(agregar_personal())
    }

    useEffect(()=> {
        obt_personal()
    }, [])
    return (
        <div>
            <h1>Bienvenido</h1>
            <Button className="btn-agregar" variant="primary" onClick={handleShow}>
                Agregar Personal
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Ingresar Datos</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombres</label>
                            <input 
                                type="text" 
                                className="form-control"
                                id="nombre"
                                placeholder="Ej. Juan Carlos"
                                value={nombres}
                                onChange={e => setNombres(e.target.value)}
                                autofocus
                                />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="apellidos" className="form-label">Apellidos</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="apellidos"
                                placeholder="Ej. Perez Moncada"
                                value={apellidos}
                                onChange={e => setApellidos(e.target.value)} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="dni" className="form-label">DNI</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                id="dni"
                                placeholder="Ej. 12345678"
                                value={dni}
                                onChange={e => setDni(e.target.value)} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="area" className="form-label">Area</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="area"
                                placeholder="Ej. Compras"
                                value={area}
                                onChange={e => setArea(e.target.value)} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="fechaIngreso" className="form-label">Fecha de Ingreso</label>
                            <input 
                                type="date" 
                                className="form-control" 
                                id="fechaIngreso"
                                placeholder="Ej. 12/02/2005"
                                value={fechaIngreso}
                                onChange={e => setFechaIngreso(e.target.value)} />
                        </div>
                        <div className="mt-5">
                            <button type="submit" className="btn btn-success">Submit</button>
                            <button type="submit" className="btn btn-danger mx-3">Cancelar</button>
                        </div>
                    </form>
                </Offcanvas.Body>
            </Offcanvas>

            <Table striped bordered hover variant="light" className="table" responsive="sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Apellidos </th>
                    <th>Dni</th>
                    <th>Area</th>
                    <th>Fecha de Ingreso</th>
                    <th colSpan={2}>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>43407717</td>
                    <td>Compras</td>
                    <td>12/02/2015</td>
                    <td><Button variant="success">Editar</Button></td>
                    <td><Button variant="danger">Eliminar</Button></td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>12345678</td>
                    <td>Ventas</td>
                    <td>06/05/2018</td>
                    <td><Button variant="success">Editar</Button></td>
                    <td><Button variant="danger">Eliminar</Button></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
