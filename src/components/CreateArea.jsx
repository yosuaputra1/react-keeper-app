import React, {useState} from "react";

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event){
    const {name, value} = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }
    })
  }

  function handleSubmit(event){
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
        onChange={handleChange}
        value={note.title}
        name="title" placeholder="Title" />
        <textarea 
        onChange={handleChange}
        value={note.content}
        name="content" placeholder="Take a note..." rows="3" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
