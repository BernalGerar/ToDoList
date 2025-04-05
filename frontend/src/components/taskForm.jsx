import { Button } from "./compAux/button.jsx"

export function TaskForm({onChangeTitle, onChangeDes, handleSubmit, text, title }) {

    return ( 
      <>
        <input type="text" value={title} onChange={ (e) => { onChangeTitle(e) } }/>      
        <input type="text" value={text} onChange={ (e) => {  onChangeDes(e) } }/>
        <Button onClick={ handleSubmit } nombre='confirmar'/>
      </>
    )

}