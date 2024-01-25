import React, { useState } from 'react'
import { editIcon, remove } from '../../assets';


const Todoform = () => {
  const [input, setInput] = useState('');
  const [todo, setTodo] = useState([]);
  const [edit, setEdit] = useState(null);

  let id = 0
  if (todo.length === 0) {
    id = 0
  } else {
    id = todo.length + 1
  };
  const editList = (id) => {
    setEdit(id);
    setInput('')
  };
  const editSave = (id, newText) => {
    const updatedTodo = todo.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      } else {
        return todo;
      }
    });
    setEdit(null);
    setTodo(updatedTodo);
    setInput('');





    return;
  };
  const Click_Handle = () => {
    if (input !== '') {
      setInput('')
      setTodo([...todo, { text: input, id: id }])
    }
  };
  const trash = (id) => {
    const newtodo = todo.filter((todo) => todo.id !== id);
    setTodo(newtodo)
      ;
  };


  return (
    <div>
      <h1> What do you want to do?</h1>
      <input
        className="todo"
        value={input}
        placeholder="What do you want to do?"
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="Todobtn" onClick={Click_Handle}>
        Add to list
      </button>
  
      <ol className="list">
        {todo.map((todo) => (
          <li key={todo.id}>
            {edit === todo.id ? (
              <div>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={() => editSave(todo.id, input)}>Add</button>
              </div>
            ) : (
              <div>
                {todo.text}
                <img
                  src={editIcon}
                  onClick={() => {
                    editList(todo.id);
                  }}
                  alt="edit"
                />
                <img
                  src={remove}
                  onClick={() => {
                    trash(todo.id);
                  }}
                  alt="remove"
                />
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
export default Todoform