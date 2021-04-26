import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";
import TodoForm from "../components/todoForm";
import TodoCard from "../components/todoCard";

export default function Home() {
  //useStates variables
  
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo({ id: Math.floor(Math.random() * 10000), text: input });
    setInput("");
  };

  const addTodo = (todo) => {
    // Checks for more than one blank spaces after words
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const removeItem = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeItem);
  };


  return (
    <div className={styles.container}>
      <Head>
        <title>What's to do? || Todo APP</title>
        <link rel="icon" href="/favicon-16x16.png" type="image/x-icon"></link>
      </Head>
      <h1 id="h1Title" key="h1Title" className={styles.title}>
        What's to do?
      </h1>

      <TodoForm
        value={input}
        onSubmit={handleSubmit}
        onChange={handleChange}
        inpRef={inputRef}
      ></TodoForm>

      {todos.map((todo, index) => (
        <TodoCard
          idKey={index}
          todoKey={todo.id}
          taskTodo={todo.text}
          deleteTodo={() => removeTodo(todo.id)}
        ></TodoCard>
      ))}
    </div>
  );
}
