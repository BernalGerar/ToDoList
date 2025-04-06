import { Button } from "./compAux/button.jsx"

export function TaskItem({id, title, description, onEdit, onDelete}) {

    return (
        <li> 
            <div className="task">
                <p><strong>{title}</strong></p>
                <p>{description}</p>
                <Button nombre="editar" onClick={ () => { onEdit(id, title, description) } }/>
                <Button nombre="eliminar" onClick={ () => { onDelete(id, title, description) } }/>
            </div>
        </li>
    )
    
}