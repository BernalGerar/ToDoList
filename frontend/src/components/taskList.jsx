import { TaskItem } from "./taskItem.jsx"

export function TaskList({ListaTareas, onDelete, onEdit, onChange}) {   

    return (
        <ul>
            {ListaTareas.map( task => {
                return (
                    <TaskItem
                        onChange={ (id, title, description, state) => { onChange(id, title, description, state) }}
                        onEdit={ (id, title, description) => { onEdit(id, title, description) } }
                        onDelete={ (id) => { onDelete(id) } }
                        key={task.id}
                        id={ task.id}
                        checked={task.completed}
                        title={task.title}
                        description={task.description}
                    />
                )
            })}
        </ul>
    )

}