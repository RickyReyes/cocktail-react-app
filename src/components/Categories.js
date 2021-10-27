import React from "react";
     
class Categories extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        let categoriesArr = this.props.listOfCategories;
        let categoryKeys = Object.keys(categoriesArr);

        return (
            <ul className="categories">
                {categoryKeys.map((keyName, idx) => 
                    <li key={idx}
                    className="category"
                    style={{color: categoriesArr[categoryKeys[idx]].color}}
                    onClick={this.props.handleClick}>
                        {keyName}
                    </li>
                )}
            </ul>
        )
    }
}

const categories = [
    {
        categoryName: 'spirits',
        color: 'navy'
    }, 
    {
        categoryName: 'liqueurs',
        color: 'coral',
    }, 
    {
        categoryName: 'vermouth',
        color: 'purple'
    }, 
    {
        categoryName: 'amari',
        color: 'brown'
    },
    {
        categoryName: 'juices',
        color: 'orange'
    },
    {
        categoryName: 'syrups',
        color: 'green'
    }, 
    {
        categoryName: 'bitters',
        color: 'red'
    },
    {
        categoryName: 'garnishes',
        color: 'blue'
    }
];

export default Categories
