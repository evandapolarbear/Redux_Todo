import React from 'react';
import TodoListItem from './todo_list_item';

class TodoList extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestTodos();
  }

  render () {
    return (
    <ul>
      { this.props.todos.map((el, idx)=> {
        return <TodoListItem todo={el} key={idx} />;
      }) }
    </ul>
  );
  }
}

export default TodoList;
