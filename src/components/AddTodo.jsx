import React, { Component } from "react";

class AddTodo extends Component {
	constructor() {
		super();
		this.state = {
			title: "",
		};
	}

	onChange = e => {
		this.setState({
			title: e.target.value,
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		if (!this.state.title) {
			alert("please enter a todo...");
			return;
		}
		this.props.addTodo(this.state.title);
		this.setState({
			title: "",
		});
	};

	render() {
		return (
			<form
				onSubmit={this.handleSubmit}
				style={{ display: "flex", padding: "5px" }}
			>
				<input
					type="text"
					name="title"
					style={{ flex: "10" }}
					placeholder="Enter a new todo..."
					value={this.state.title}
					onChange={this.onChange}
				/>
				<input type="submit" style={{ flex: "2" }} />
			</form>
		);
	}
}

export default AddTodo;
