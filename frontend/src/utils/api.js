export const createTask = async (title, des) => {

    try {
  
      const res = await fetch( `${process.env.REACT_APP_API_URL}/api/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "title": title,
          "description": des,
          "completed": false
        })
      })
      
      if(!res.ok) {
        const error = await res.json();
        console.log(error);
        return null;
      }

      const dataTask = await res.json();
    
      return dataTask;
  
    }catch(err) {
      //console.log("Error: " + err)
      return null;
    }
  
}

export  const editTask = (id, title, des, state) => {

    fetch( `${process.env.REACT_APP_API_URL}/api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "title": title,
          "description": des,
          "completed": state,
          "id": id
        })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log("Error: " + err))
  
}

export  const deleteTask = (id) => {
    
    fetch( `${process.env.REACT_APP_API_URL}/api/tasks/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log("Error: " + err))
  
}