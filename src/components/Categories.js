import React from "react";

class Categories extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let mainObj = this.props.mainObj;
		let categories = Object.keys(mainObj);

		return (
			<ul className="categories">
				{categories.map((keyName, idx) => (
					<li
						key={idx}
						className="category"
						style={{ color: mainObj[categories[idx]].color }}
						onClick={this.props.handleClick}
					>
						{keyName}
					</li>
				))}
			</ul>
		);
	}
}

export default Categories;
