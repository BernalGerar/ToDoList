import { Button } from "./compAux/button.jsx"

export function TaskItem({id, title, description, onEdit, onDelete, onChange}) {

    return (
        <li> 
            <div className="task">
                <label>
                    <input 
                        type="checkbox"
                        onChange={(e) => { onChange(id, title, description, e.target.checked) } }
                    /> estado de tarea
                </label>
                <p><strong>{title}</strong></p>
                <p>{description}</p>
                <Button nombre="editar" onClick={ () => { onEdit(id, title, description) } }/>
                <Button nombre="eliminar" onClick={ () => { onDelete(id) } }/>
            </div>
        </li>
    )
    
}