import React from 'react';
import style from './TodoList.css';
import Todo from "./Todo";


class TodoList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
    return  <ul className={style.todolist}>
              <Todo/>
            </ul>
	}
}

export default TodoList;
