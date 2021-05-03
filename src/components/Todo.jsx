import React, { Component } from "react";
import TodoItem from "./TodoItem";

class Todo extends Component {
	render() {
		const { todos, handleDelete, handleComplete } = this.props;
		return (
			<div>
				{todos.map(todo => (
					<TodoItem
						key={todo.id}
						todo={todo}
						handleDelete={this.props.handleDelete}
						handleComplete={this.props.handleComplete}
					/>
				))}
				;
			</div>
		);
	}
}

export default Todo;
