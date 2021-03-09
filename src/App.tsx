/** @format */

import logo from "./logo.svg";
import "./App.css";

function App() {
	let firstValue: string = "First Value";
	let secondValue: number = 13;
	let thirdValue: boolean = true;
	let fourthValue: number[] = [1, 2, 3];
	let aTuple: [string, number] = ["hello", 4];
	enum MyObject {
		first = 1,
		second = "hello",
	}
	let randomVariable: any = "anything i want";
	const thisFunction = (): void => {
		console.log("this function");
	};
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					1. The value is {MyObject} which is a {typeof MyObject} type.
				</p>
			</header>
		</div>
	);
}

export default App;
