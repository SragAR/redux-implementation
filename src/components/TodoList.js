import React, { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => {
    console.log("hai", todos)
    return (<ul>
        {todos.map((todo, i) => {
            return (<Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />)
        })}
    </ul>)

}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }
    ))
}

export default TodoList;