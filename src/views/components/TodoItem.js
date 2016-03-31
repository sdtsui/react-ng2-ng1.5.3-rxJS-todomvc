import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'

class TodoItem extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      editing: false
    }
  }

  handleDoubleClick() {
    this.setState({ editing: true })
  }

  handleSave(id, text) {
    if (text.length === 0) {
      this.props.Intent.del(id)
    } else {
      this.props.Intent.edit(id, text)
    }
    this.setState({ editing: false })
  }

  render() {
    const { todo } = this.props
    const { complete, del } = this.props.Intent

    let element
    if (this.state.editing) {
      element = (
        <TodoTextInput text={todo.text}
                       editing={this.state.editing}
                       onSave={(text) => this.handleSave(todo.id, text)} />
      )
    } else {
      element = (
        <div className="view">
          <input className="toggle"
                 type="checkbox"
                 checked={todo.completed}
                 onChange={() => {complete(todo.id);}} />
          <label onDoubleClick={this.handleDoubleClick.bind(this)}>
            {todo.text}
          </label>
          <button className="destroy"
                  onClick={() => del(todo.id)} />
        </div>
      )
    }

    return (
      <li className={classnames({
        completed: todo.completed,
        editing: this.state.editing
      })}>
        {element}
      </li>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  Intent: PropTypes.object.isRequired
}

// TodoItem.propTypes = {
//   todo: PropTypes.object.isRequired,
//   editTodo: PropTypes.func.isRequired,
//   delt: PropTypes.func.isRequired,
//   complete: PropTypes.func.isRequired
// }


export default TodoItem
