import React from 'react'
import Header from './components/Header'
import MainSection from './components/MainSection'
import Intent from '../rx/intent'

class TodoApp extends React.Component {
  render() {
    console.log("render");
    const { todos, Intent } = this.props
    debugger;

    return (
      <div>
        <Header addTodo={Intent.add} />
        <MainSection todos={todos} Intent={Intent} />
      </div>
    )
  }
}

TodoApp.propTypes = {
  todos: PropTypes.array.isRequired,
  Intent: PropTypes.object.isRequired
};

export default TodoApp
