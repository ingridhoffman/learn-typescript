/** @format */

import logo from "./logo.svg";
import "./App.css";
import { Message } from "./Message";

function App() {
	// primitive types
	let firstValue: string = "First Value";
	let secondValue: number = 13;
	let thirdValue: boolean = true;
	// arrays
	let fourthValue: number[] = [1, 2, 3];
	let fifthValue: Array<string> = ["a", "b"];
	let aTuple: [string, number] = ["hello", 4];
	// any
	let randomVariable: any = "anything i want";
	// function
	const thisFunction = (x: string): string => {
		return x + " world";
	};
	let testFunction = thisFunction("hello");
	// object in function, third variable optional
	const objectFunction = (obj: { first: string; second: string; third?: string }): string => {
		return obj.first + obj.second;
	};
	let testObjectFunction = objectFunction({ first: "hello ", second: "world" });
	// union type
	const unionFunction = (x: number | string) => {};
	// type alias
	type MyString = string[] | string;
	type Point = {
		x: number;
		y: number;
	};
	const pointFunction = (pt: Point): string => {
		return pt.x.toString() + " and " + pt.y.toString();
	};
	const testPointFunction = pointFunction({ x: 1, y: 2 });
	// literal type
	const numberFunction = (num: 1 | 2): void => {};
	// numberFunction(3); will give an error because 3 is not 1 or 2

	return (
		<div className="App">
			<header className="App-header">
				<p>
					The value is {testPointFunction} which is a {typeof testPointFunction} type.
				</p>
				<Message msg="we are learning typescript" />
			</header>
		</div>
	);
}

export default App;
