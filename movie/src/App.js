import Button from "./Button";
import styled from './App.module.css';
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => {
    return prev + 1
  });
  const onChange = (event) => {
    setKeyword(event.target.value);
  }
  useEffect(() => {
    console.log('call the api');
  }, []);
  useEffect(() => {
    console.log('counter가 변경되면 실행');
  }, [counter]);
  useEffect(() => {
    console.log('keyword가 변경되면 실행');
  }, [keyword]);
  useEffect(() => {
    console.log('counter, keyword 둘 중 하나가 변경되면 실행');
  }, [counter, keyword]);

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
