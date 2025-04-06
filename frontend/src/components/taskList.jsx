import { TaskItem } from "./taskItem.jsx"

export function TaskList({ListaTareas, onDelete, onEdit}) {   

    return (
        <ul>
            {ListaTareas.map((task, index) => {
                return ( 
                    <TaskItem
                        onEdit={ (id, title, description) => { onEdit(id, title, description) } }
                        onDelete={ (id, title, description) => { onDelete(id, title, description) } }
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