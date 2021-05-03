import React, { Component } from "react";

class TodoItem extends Component {
	render() {
		const listStyle = () => {
			return {
				padding: "5px 10px",
				borderBottom: "1px solid black",
				backgroundColor: "#eee",
				fontSize: "20px",
				textDecoration: this.props.todo.completed ? "line-through" : "none",
			};
		};
		const btnStyle = {
			float: "right",
			backgroundColor: "red",
			cursor: "pointer",
			border: "none",
			outline: "none",
			borderRadius: "50%",
		};
		const { todo, handleDelete, handleComplete } = this.props;
		return (
			<div style={listStyle()}>
				<input
					style={{ marginRight: "5px" }}
					type="checkbox"
					onChange={() => handleComplete(todo.id)}
				/>
				{todo.title}
				<button style={btnStyle} onClick={() => handleDelete(todo.id)}>
					x
				</button>
			</div>
		);
	}
}

export default TodoItem;
