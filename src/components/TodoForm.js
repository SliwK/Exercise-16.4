import React from 'react';
import style from './TodoForm.css';

const TodoForm = (props) => {
    return (
        <form>
            <label className={style.todoform}>New task:</label>
            <input
                type='text'
                id='task'
                value={props.value}
                onChange={(event) => props.updateTaskText(event.target.value)}
            />

            <button className={style.todoform} onClick={() => props.addTodo()}>Add</button>
        </form>
    )

}

export default TodoForm;
