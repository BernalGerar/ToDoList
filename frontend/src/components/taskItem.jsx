import { Button } from "./compAux/button.jsx"

export function TaskItem({id, title, description, onEditar, onActualizar}) {

    return (
        <li> 
            <div className="task">
                <p><strong>{title}</strong></p>
                <p>{description}</p>
                <Button nombre="editar" onClick={ () => { onEditar(id, title, description) } }/>
                <Button nombre="eliminar" onClick={ () => { onActualizar(id, title, description) } }/>
            </div>
        </li>
    )
    
}