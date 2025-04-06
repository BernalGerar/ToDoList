import { taskList } from "./db.js";

export function ValCabecera(req, res, next) {
    if( ( !req.headers["content-type"] || 
           req.headers["content-type"] !== "application/json"
        ) &&
        (
            req.method == "POST" || 
            req.method == "PUT"
        ) 
      )  res.status(400).json({error: "el tipo contenido está faltante o es distinto al json"});
    else next()
}

export function CuerpoVacio(req, res, next) {
    if( Object.keys(req.body).length == 0 ) 
        res.status(400).json ({ error: "el cuerpo de la solicitud está vacia"} )
    else next();
}

export function FaltaId(req, res, next) {
    const taskPos = taskList.findIndex(task => task.id == req.params.id);
    //console.log(taskPos);
    if( taskPos == -1) res.status(400).json( { error: "id incorrecta" } )
    else next();
}

export function TareaYaAgregada(req, res, next) {
    
    const taskVal = taskList.some( task => { return ( 
            (task.title.toLowerCase() == req.body.title.toLowerCase()) && 
            (task.description.toLowerCase() == req.body.description.toLowerCase()) 
        )}
    )
    //console.log(taskVal);
    if(taskVal) res.status(409).json( {error: "La tarea está repetida"} )
    else next();
}

export function UrlIncorrecta(req, res, next) {
    res.status(400).json( { error: "La ruta no es correcta" } );
};