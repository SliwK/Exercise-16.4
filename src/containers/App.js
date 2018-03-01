import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [{
                    id: 1,
                    text: 'clean room'
                    }, {
                    id: 2,
                    text: 'wash the dishes'
                    }, {
                    id: 3,
                    text: 'feed my cat'
                    }]
        };
    }

    addTodo(value){
        const todo = {
            text: value,
            id: uuid.v4(),
        };
        this.setState({
          data: [...this.state.data, {todo}]
        });
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }


    render() {
      return (
          <div className={style.TodoApp}>
              <Title title="LISTA ZADAŃ : " number={this.state.data.length}/>

              <TodoForm addTodo={this.addTodo} value={this.state.value}/>
              <TodoList taskList={this.state.data} removeTodo={this.removeTodo.bind(this)}/>
          </div>
      );
    }


}

export default App;
