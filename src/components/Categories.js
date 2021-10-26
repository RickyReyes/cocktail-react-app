import React from "react";
     
class Categories extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <ul className="categories">
                {categories.map((item, idx) => 
                    <li key={idx}
                    className="category"
                    style={{color: item.color}}
                    onClick={this.props.handleClick}>
                        {item.categoryName}
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
