import React, { FC } from 'react';
import { ITodo } from '../types/types';

interface TodoItemProps {
    todo: ITodo;
}

const TodoItem: FC <TodoItemProps> = ({todo }) => {
    return (
        <div style={{padding: 15, border:"1px solid yellow"}}>
            {todo.id}. {todo.title}
            <input type="checkbox" checked={todo.completed}/>
        </div>
    );
};

export default TodoItem;