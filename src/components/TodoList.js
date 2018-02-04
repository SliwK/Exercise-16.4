import React from 'react';
import style from './TodoList.css';
import Todo from "./Todo";

const TodoList = (props) => {
    const tasks = props.taskList.map((item) => {
        return (
            <li className={style.TodoList} key={item.id}>
								<p className={style.taskText}>
                		{item.text}
								</p>
								<p className={style.delButton} onClick={() => props.removeTodo(item.id)}>x</p>
            </li>
        )
    });

    return (
        <div className={style.TodoList}>
					<ul>
            {tasks}
					</ul>
        </div>
    )

}

export default TodoList;
