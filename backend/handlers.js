import { taskList } from "./db.js";
import crypto from "node:crypto";

export function ObtenerListas(req, res) {
    console.log("peticion recivida");
    res.status(200).json(taskList);
}

export function CrearLista(req, res) {
    console.log("se recivio la tarea");

    const {title, description, completed} = req.body;
    const task = {
        title: title,
        description: description,
        completed: completed,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString()
    }

    taskList.push(task);

    res.status(200).json(task);

}

export function ActualizarList(req, res) {
    console.log("se actualizo la tarea");
    const {title, description, completed} = req.body;
    const taskPos = taskList.findIndex(task => task.id == req.params.id);
    
    taskList[taskPos] = {
        tittle: title ?? taskList[taskPos].title,
        description: description ?? taskList[taskPos].description,
        completed: completed ?? taskList[taskPos].completed,
        id: taskList[taskPos].id,
        createdAt: taskList[taskPos].createdAt
    }

    res.status(200).json(taskList[taskPos])
}

export function EliminarLista(req, res) {
    console.log("se elimino la tarea");

    const taskPos = taskList.findIndex(task => task.id == req.params.id);
    taskList.splice(taskPos, 1);
    console.log(taskList)
    res.status(200).json({ message: "Tarea eliminada correctamente" });
}