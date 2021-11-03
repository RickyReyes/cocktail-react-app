import React from "react";
import ReactDOM from 'react-dom';

class Selections extends React.Component {
	constructor(props) {
		super(props);
		this.removeItem = this.removeItem.bind(this);
	}

	// NOT FUNCTIONAL YET
	// for removing items by clicking in Selections component
	removeItem() {
		return;
	}
	render() {
		return (
			<ul className="selections">
				{this.props.mainList.map((item, idx) => (
					<li key={idx} className="selection" onClick={this.removeItem}
					style={{backgroundColor: item[1]}}>
						{item[0]}
					</li>
					
				))}
			</ul>
		);
	}
}

export default Selections;
