import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos(function(currentArray) {
      return (
        [toDo, ...currentArray]
      )
    })
    setToDo("");
  }

  return (
    <div>
      <h1>My To Dos: {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} test="text" placeholder="Write your to do..." />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {
          toDos.map((value, index) => {
            return (
              <li key={index}>{value}</li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
