import React from 'react';
import style from './Todo.css';

class Todo extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return  <li>
                <div>
                  <p className={style.taskText}>
                      test zadania
                  </p>
                  <p className={style.deleteButton}>
                      x
                  </p>
                </div>
            </li>;
	}
}

export default Todo;
