import React from "react";


class Options extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ul className="options">
                {this.props.category.map((item, idx) => 
                <li key={idx} className="option">{item}</li>)}
            </ul>
        )
    }
}

export default Options
