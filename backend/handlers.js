export function ObtenerListas(req, res) {
    console.log("peticion recivida");
    res.send("enviando listas");
}

export function CrearLista(req, res) {
    console.log("se recivio la tarea");
    //req.body.age = 24;
    console.log(req.body)
    res.send(JSON.stringify(req.body));
}

export function ActualizarList(req, res) {
    console.log("se actualizo la tarea");
    res.send("200");
}

export function EliminarLista(req, res) {
    console.log("se elimino la tarea");
    res.send("200")
}