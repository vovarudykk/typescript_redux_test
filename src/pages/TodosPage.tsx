import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import List from "../components/List";
import TodoItem from "../components/TodoItem";
import { ITodo } from "../types/types";

const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(()=> {
    fetchTodos();
  }, [])

  async function fetchTodos() {
    try {
      const responce = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=5');
      setTodos(responce.data)
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <List 
        items={todos} 
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}
      />
    </div>
  );
};

export default TodosPage;
