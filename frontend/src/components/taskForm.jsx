import { Button } from "./compAux/button.jsx"
import { useState } from "react";

export function TaskForm({ onSubmit }) {
    const [text, setText] = useState("");
    const [tittle, setTittle] = useState("");

    function handleSubmit() {
        const newTask = {
            "tittle": tittle,
            "description": text
        };

        onSubmit(newTask);

        setText("");
        setTittle("");
    }

    return ( 
      <>
        <input type="text" value={tittle} onChange={(e) => { setTittle(e.target.value) }}/>      
        <input type="text" value={text} onChange={(e) => { setText(e.target.value) }}/>
        <Button onClick={ handleSubmit } nombre='confirmar'/>
      </>
    )

}