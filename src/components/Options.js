import React from 'react';
import Option from '../components/Option';


class Options extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        let clickedCategory = this.props.category;
        let categoriesArr = this.props.listOfCategories;

        // we need to map through an array, not an object.
        let categoryKeys = Object.keys(categoriesArr); 

        // the object of the category.
        let categoryObj = categoriesArr[clickedCategory];
        
        return (
            <ul className="options">
                {categoryObj.items.map((keyName, idx) => {
                    return (
                        <Option key={idx} requiredKey={idx} className="option" style={{backgroundColor: categoryObj.color}} keyName={keyName} 
                        categoryObj= {categoryObj} />
                    )

                })}
            </ul>
        )
    }
}

export default Options
