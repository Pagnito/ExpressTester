import React, { Component } from "react";

class DropDownLink extends Component {
	render() {
		return (
			<div>
				<i
					style={{
						zIndex: "100",
						position: "absolute",
						color: "white",
						fontSize: "45px",
						right: "25px",
						top: "25px",
						cursor: "pointer"
					}}
					onClick={this.props.dropDown}
					className="fab  fa-gitter"
				/>
			</div>
		);
	}
}
export default DropDownLink;
