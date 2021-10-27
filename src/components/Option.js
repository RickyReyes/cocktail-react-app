import React from 'react';

class Option extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false
        };
        this.selectOption = this.selectOption.bind(this);
    }

    selectOption() {
        // eslint-disable fixes error caused by implementing this method
        /* eslint-disable */
        this.setState(prevState => ({
            selected: !prevState.selected
        }));
        console.log(this.state)

    }


    render() {
        // this style will be applied when an option is selected.
        let buttonStyle= {
            backgroundColor: this.props.categoryObj.color
        }
        if (this.state.selected) {
            buttonStyle = {
                backgroundColor: this.props.categoryObj.color,
                border: '3px solid red'
            }
        }
        return (
            <li key={this.props.requiredKey} className={this.props.className}
            onClick={this.selectOption}
            style= {buttonStyle}>
                {this.props.keyName}
            </li>
        )
    }
}

export default Option