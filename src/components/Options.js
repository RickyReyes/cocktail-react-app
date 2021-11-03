import React from 'react';
import Option from '../components/Option';


class Options extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        let currentCategory = this.props.currentCategory;
        let mainObj = this.props.mainObj;

        // we need to map through an array, not an object.
        let categories = Object.keys(mainObj); 

        // the object of the category.
        let categoryObj = mainObj[currentCategory];

        // the items for the given category, sorted alphabetically.
        let sortedItems = categoryObj.items.sort();
        
        return (
            <ul className="options">
                {sortedItems.map((keyName, idx) => {
                    return (
                        <Option key={idx} 
                                requiredKey={idx} 
                                className="option" 
                                style={{backgroundColor: categoryObj.color}} 
                                keyName={keyName} 
                                categoryObj= {categoryObj} 
                                addItem={this.props.addItem}
                                removeItem={this.props.removeItem} 
                                mainList= {this.props.mainList} />
                    )
                })}
            </ul>
        )
    }
}

export default Options
