import { TaskItem } from "./taskItem"

export function TaskList({ListaTareas, onActualizar, onEditar}) {   

    return (
        <ul>
            {ListaTareas.map((task, index) => {
                return ( 
                    <TaskItem
                        onActualizar={ (id, title, description) => { onEditar(id, title, description) } }
                        onEditar={ (id, title, description) => { onActualizar(id, title, description) } }
                        key={index}
                        id={index}
                        title={task.title}
                        description={task.description}
                    />
                )
            })}
        </ul>
    )
    
}