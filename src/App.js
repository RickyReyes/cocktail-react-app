import React from 'react';
import Categories from './components/Categories';
import Options from './components/Options';
import Selections from './components/Selections';
import Option from './components/Option';

const categoriesArr = {
  spirits: {
    name: "spirits",
    items: ["absinthe", "gin", "vodka", "rum", "bourbon", "rye whiskey", "scotch", "cognac", "tequila", "mezcal"],
    color: 'navy'
  },
    liqueurs: {
    name: "liqueurs",
    items: ["aperol", "campari", "cointreau",  "creme de cassis", "creme de violette", "st. germain"],
    color: 'coral'
  },
  vermouth: {
    name: "vermouth", 
    items: ["dry vermouth", "sweet vermouth"],
    color: 'purple'
  },
  amari: {
    name: "amari", 
    items: ["amaro nonino", "amaro ramazzotti", "amaro montenegro"],
    color: 'brown'
  },
  juices: {
    name: "juices",
    items: ["cranberry juice", "grapefruit juice", "lemon juice", "lime juice", "orange juice", "pineapple juice"],
    color: 'green'
  },
  syrups: {
    name: "syrups", 
    items: ["agave syrup", "orgeat", "simple syrup"],
    color: 'orange'
  },
  bubbles: {
    name: "bubbles", 
    items: ["prosecco", "soda water", "coke", "tonic"],
    color: 'magenta'
  },
  bitters: {
    name: "bitters", 
    items: ["angostura bitters", "chocolate bitters", "spicy bitters", "orange bitters", "peychaud's bitters"],
    color: 'tan'
  },
  garnishes: {
    name: "garnishes", 
    items: ["orange peel", "lemon peel", "cherry garnish"],
    color: 'blue'
  },
  miscellaneous: {
    name: "miscellaneous", 
    items: ["egg", "egg white"],
    color: 'teal'
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // initialize with spirits rendered.
      currentCategory: Object.keys(categoriesArr)[0] 
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      currentCategory: e.target.innerText
    });
  }


  render() {
    return (
      <div className="App">
        <div className="top-flex">
          <Categories listOfCategories={categoriesArr}
                      handleClick={this.handleClick} />
          <Options listOfCategories={categoriesArr} 
                  category={this.state.currentCategory} 
                  onClick={this.selectOption} />
        </div>
        <div className="bottom-flex">
          <Selections />
        </div>
      </div>
    );
  }
}

export default App

