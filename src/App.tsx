/** @format */

import logo from "./logo.svg";
import "./App.css";

function App() {
	let firstValue: string = "First Value";
	let secondValue: number = 13;
	let thirdValue: boolean = true;
	let fourthValue: Array<number> = [1, 2, 3];

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					1. The value is {firstValue} which is a {typeof firstValue} type.
					<br />
					2. The value is {secondValue} which is a {typeof secondValue} type.
					<br />
					3. The value is {thirdValue} which is a {typeof thirdValue} type.
					<br />
					4. The value is {fourthValue} which is a {typeof fourthValue} type.
					<br />
				</p>
			</header>
		</div>
	);
}

export default App;
