import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
	render() {
		return (
			<div style={headerStyle}>
				<p style={{ fontSize: "2em", fontWeight: "Bold" }}>Todo List</p>
				<span>
					<Link to="/">Home</Link> || <Link to="/about">About</Link>
				</span>
			</div>
		);
	}
}
const headerStyle = {
	background: "#333",
	color: "#fff",
	padding: "8px 14px",
	textAlign: "center",
};

export default Header;
