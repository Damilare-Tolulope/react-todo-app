import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
import About from "./components/About";
// import counter from "./components/counter";
import Header from "./components/Header/header";

class App extends Component {
	constructor() {
		super();
		this.state = {
			todos: [
				{
					id: uuidv4(),
					title: "Practice react",
					completed: false,
				},
				{
					id: uuidv4(),
					title: "Read on Nodejs",
					completed: false,
				},
				{
					id: uuidv4(),
					title: "Continue church website",
					completed: false,
				},
			],
		};
	}

	handleDelete = (id) => {
		const todos = this.state.todos.filter((t) => id !== t.id);
		this.setState({ todos });
	};

	handleComplete = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			}),
		});
	};

	addTodo = (title) => {
		const newTodo = {
			id: uuidv4(),
			title,
			completed: false,
		};
		const todos = [...this.state.todos, newTodo];
		this.setState({
			todos,
		});
	};

	render() {
		return (
			<Router>
				<div>
					<Header />
					<Route
						exact
						path="/"
						render={(props) => (
							<React.Fragment>
								<AddTodo addTodo={this.addTodo} />
								<Todo
									todos={this.state.todos}
									handleDelete={this.handleDelete}
									handleComplete={this.handleComplete}
									addTodo={this.addTodo}
								/>
							</React.Fragment>
						)}
					/>
					<Route path="/about" component={About} />
				</div>
			</Router>
		);
	}
}

export default App;
