import React from "react";

class Option extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: false,
		};
		this.selectOption = this.selectOption.bind(this);
		this.applyBothFuncs = this.applyBothFuncs.bind(this);
	}

	// This function toggles this.state.selected for each Option.
	selectOption() {
		// eslint-disable fixes error caused by implementing this method
		/* eslint-disable */
		this.setState((prevState) => ({
			selected: !prevState.selected,
		}));
	}

	// Apply selectOption() and addItem() to an Option
	applyBothFuncs(e) {
		// apply styles
		this.selectOption();
		let addItem = this.props.addItem;
		let removeItem = this.props.removeItem;
		let item = e.target.innerText;
		let color = e.target.style.backgroundColor;
		if (!this.state.selected) {
			addItem(item, color);
		} else {
			removeItem(item);
		}
	}

	render() {
		// this style will be applied when an option is selected.
		let buttonStyle = {
			backgroundColor: this.props.categoryObj.color,
		};
		if (this.state.selected) {
			buttonStyle = {
				backgroundColor: this.props.categoryObj.color,
				border: "3px solid red",
			};
		}
		return (
			<li
				key={this.props.requiredKey}
				className={this.props.className}
				onClick={this.applyBothFuncs}
				style={buttonStyle}
			>
				{this.props.keyName}
			</li>
		);
	}
}

export default Option;
