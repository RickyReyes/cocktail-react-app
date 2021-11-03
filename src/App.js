import React from "react";
import Categories from "./components/Categories";
import Options from "./components/Options";
import Selections from "./components/Selections";
import Option from "./components/Option";


import { mainObj } from './mainObj.js';

/* 
This is the COCKTAIL-REACT-APP by Ricky Reyes.
The purpose of the app is as follows:
1. You select one or more cocktail ingredients.
2. A list of cocktails which include all of the ingredients you have selected will be rendered on the page.
  - if you have some but not all of the ingredients, you will be shown the missing ingredients needed to make the cocktail.
3. You can click on the rendered cocktails,  and you will be shown the ingredients and recipe for the cocktail.
*/
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// The category that will initially be rendered on the page (Spirits)
			currentCategory: Object.keys(mainObj)[0],

			// The list that will hold the rendered cocktails.
			mainList: [],
		};
		this.handleClick = this.handleClick.bind(this);
		this.addItem = this.addItem.bind(this);
		this.removeItem = this.removeItem.bind(this);

	}

	handleClick(e) {
		this.setState({
			currentCategory: e.target.innerText,
		});
		console.log("new category: " + this.state.currentCategory);
	}

	// This function adds Option (<li>) elements to the this.state.mainList.
	addItem(item, color) {
		if (this.state.mainList.includes(item)) {
			return;
		}
		this.setState((prevState) => ({
			mainList: prevState.mainList.concat([[item, color]])
		}));
    console.log(this.state.mainList);
	}

	removeItem(item) {
		console.log('remove item');
	}

	render() {
		return (
			<div className="App">
				<section className="top-flex">
					<Categories
						mainObj={mainObj}
						handleClick={this.handleClick}
					/>
					<Options
						mainObj={mainObj}
						currentCategory={this.state.currentCategory}
						onClick={this.selectOption}
						addItem={this.addItem}
						removeItem={this.removeItem}
						mainList={this.state.mainList}
					/>
				</section>
				<section className="bottom-flex">
					<Selections
						mainList={this.state.mainList}
						mainObj={mainObj}
					/>
				</section>
			</div>
		);
	}
}

export default App;
