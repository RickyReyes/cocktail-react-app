import React from 'react';
import Categories from './components/Categories';
import Options from './components/Options';

const categoriesObj = {
  spirits: ["absinthe", "gin", "vodka", "rum", "bourbon", "rye whiskey", "scotch", "cognac", "tequila", "mezcal"],
  liqueurs: ["aperol", "campari", "cointreau",  "creme de cassis", "creme de violette", "st. germain"],
  vermouth: ["dry vermouth", "sweet vermouth"],
  amari: ["amaro nonino", "amaro ramazzotti", "amaro montenegro"],
  juices: ["cranberry juice", "grapefruit juice", "lemon juice", "lime juice", "orange juice", "pineapple juice"],
  syrups: ["agave syrup", "orgeat", "simple syrup"],
  bubbles: ["prosecco", "soda water", "coke", "tonic"],
  bitters: ["angostura bitters", "chocolate bitters", "spicy bitters", "orange bitters", "peychaud's bitters"],
  garnishes: ["orange peel", "lemon peel", "cherry garnish"],
  miscellaneous: ["egg", "egg white"]
}

const spirits = ["absinthe", "gin", "vodka", "rum", "bourbon", "rye whiskey", "scotch", "cognac", "tequila", "mezcal"];
const liqueurs = ["aperol", "campari", "cointreau",  "creme de cassis", "creme de violette", "st. germain"];
const vermouth = ["dry vermouth", "sweet vermouth"];
const amari = ["amaro nonino", "amaro ramazzotti", "amaro montenegro"];
const juices = ["cranberry juice", "grapefruit juice", "lemon juice", "lime juice", "orange juice", "pineapple juice"];
const syrups = ["agave syrup", "orgeat", "simple syrup"];
const bubbles = ["prosecco", "soda water", "coke", "tonic"]
const bitters = ["angostura bitters", "chocolate bitters", "spicy bitters", "orange bitters", "peychaud's bitters"];
const garnishes = ["orange peel", "lemon peel", "cherry garnish"];
const miscellaneous = ["egg", "egg white"];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCategory: spirits
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      currentCategory: categoriesObj[e.target.innerText]
    });
  }
  render() {
    return (
      <div className="App">
        <div className="top-flex">
          <Categories listOfCategories={Object.keys(categoriesObj)}handleClick={this.handleClick} />
          <Options category={this.state.currentCategory} />
        </div>
      </div>
    );
  }
}

export default App

