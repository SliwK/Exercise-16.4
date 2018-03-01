import React from 'react';
import style from './TodoForm.css';

class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
      this.setState({value: event.target.value});
    //  console.log(this.refs.todo.value);
    }


    handleSubmit(event) {
      event.preventDefault();
      this.props.addTodo(this.state.value);
      this.setState({value: ''});
    }

    render() {
      return (
          <form onSubmit={this.handleSubmit}>
              <label className={style.todoform}>New task:</label>
              <input
                  type='text'
                  id='task'
                  ref="todo"
                  value={this.state.value}
                  onChange={this.handleChange}
              />

              <button className={style.todoform}>Add</button>
          </form>
      );
    }
}

export default TodoForm;
