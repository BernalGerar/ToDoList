import { taskList } from "./db.js";
import crypto from "node:crypto";

export function ObtenerListas(req, res) {
    console.log("peticion recivida");
    res.json(taskList);
}

export function CrearLista(req, res) {
    console.log("se recivio la tarea");

    const {tittle, descriptcion, completed} = req.body;
    const task = {
        tittle: tittle,
        descriptcion: descriptcion,
        completed: completed,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString()
    }

    taskList.push(task);

    res.json(task);

}

export function ActualizarList(req, res) {
    console.log("se actualizo la tarea");
    const {tittle, descriptcion, completed} = req.body;
    const taskPos = taskList.findIndex(task => task.id == req.params.id);
    
    taskList[taskPos] = {
        tittle: tittle ?? taskList[taskPos].tittle,
        descriptcion: descriptcion ?? taskList[taskPos].descriptcion,
        completed: completed ?? taskList[taskPos].completed,
        id: taskList[taskPos].completed,
        createdAt: taskList[taskPos].createdAt
    }

    res.json(taskList[taskPos])
}

export function EliminarLista(req, res) {
    console.log("se elimino la tarea");

    const taskPos = taskList.findIndex(task => task.id == req.params.id);
    taskList.splice(taskPos, 1);
    console.log(taskList)
    res.status(200).json({ message: "Tarea eliminada correctamente" });
}