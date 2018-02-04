import React from 'react';
import style from './Todo.css';


const Todo = (props) => {
			return  <li>
                <div>
	                  <p className={style.taskText}>
	                      "{props.content}"
	                  </p>
	                  <p className={style.deleteButton} onClick={props.removeTodo}>
	                      x
	                  </p>
                </div>
            </li>
}

export default Todo;
