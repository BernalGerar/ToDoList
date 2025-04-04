import { Button } from "./compAux/button.jsx"

export function TaskItem({title, description, onEditar, onActualizar}) {
    return (
        <li> 
            <div className="task">
                <p><strong>{title}</strong></p>
                <p>{description}</p>
                <Button nombre="editar" onClick={ onEditar }/>
                <Button nombre="eliminar" onClick={ onActualizar }/>
            </div>
        </li>
    )
}