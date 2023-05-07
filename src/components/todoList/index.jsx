import React from "react";
import TodoStyles from "./TodoList.style";
import Button from "../button";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";

const TodoList = ({ todoList, setTodoList }) => {
  // const handleEdit = (todo) => {
  //   console.log("inside edit" + todo.id + " > title: " + todo.title);
  // };

  const handleDelete = (todo) => {
    setTodoList(todoList.filter((item) => item.id !== todo.id));
  };

  const handleDeleteAll = () => {
    setTodoList([]);
  };

  return (
    <TodoStyles>
      <div className="todo-list-inner">
        <div className="todo-list__title">
          <h4>ToDo list</h4>
        </div>

        <ul className="todo-list">
          {todoList.map((todo) => (
              <li key={todo.id} className="todo-list__item">
                <div className="todo-list__text">
                  <p>{todo.title}</p>
                </div>
                <div className="todo-list__action">
                  {/* <Button variant="edit" onClick={() => handleEdit(todo)}>
                    <BiEdit />
                  </Button> */}
                  <Button variant="delete" onClick={() => handleDelete(todo)}>
                    <RiDeleteBinLine />
                  </Button>
                </div>
              </li>
            ))
            .reverse()}
        </ul>

        <div className="todo-list__button">
          <Button onClick={handleDeleteAll}>
            Delete All
            <div className="color-red">
              <RiDeleteBinLine />
            </div>
          </Button>
        </div>
      </div>
    </TodoStyles>
  );
};

export default TodoList;
