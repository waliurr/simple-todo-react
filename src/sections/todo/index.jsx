import React, { useEffect, useState } from "react";
import TodoStyles from "./Todo.style";
import SectionTitle from "../../components/sectionTitle";
import AddTodo from "../../components/addTodo";
import TodoList from "../../components/todoList";

const Todo = () => {
  const initialState = JSON.parse(localStorage.getItem("todoList")) || [];
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <TodoStyles>
      <div className="container">
        <SectionTitle title="Simple ToDo App" />
        <AddTodo
          todoItem={todoItem}
          setTodoItem={setTodoItem}
          todoList={todoList}
          setTodoList={setTodoList}
        />
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      </div>
    </TodoStyles>
  );
};

export default Todo;
