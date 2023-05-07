import React from "react";
import Button from "../button";
import { TbPlaylistAdd } from "react-icons/tb";
import AddTodoStyles from "./AddTodo.Style";
import { v4 as uuidv4 } from "uuid";

const AddTodo = ({ todoItem, setTodoItem, todoList, setTodoList }) => {
  const handleTodoItem = (e) => {
    setTodoItem(e.target.value);
  };

  const submitTodoItem = (e) => {
    e.preventDefault();
    setTodoList([
      ...todoList,
      { id: uuidv4(), title: todoItem, completed: false },
    ]);
    setTodoItem("");
  };

  return (
    <AddTodoStyles>
      <form onSubmit={submitTodoItem} className="addtodo_content">
        <input
          type="text"
          name="add-todo-item"
          id="add-todo-item"
          placeholder="Add new item"
          value={todoItem}
          onChange={handleTodoItem}
          required
        />

        <Button type="submit">
          Add todo
          <TbPlaylistAdd />
        </Button>
      </form>
    </AddTodoStyles>
  );
};

export default AddTodo;
