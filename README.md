<!-- @format -->

# Learning Typescript

### Getting Started

1. Create react app
2. Install typescript & dependencies
   `npm install --save typescript @types/node @types/react @types/react-dom @types/jest`
3. Change files from .js to .tsx
4. Config file is created next time project is run

\*\*\* Steps 1 and 2 can be combined by `npx create-react-app my-app --typescript` or
`npx create-react-app my-app --template typescript`

### Types

Basic types include string, number, boolean, array

Declare variable and type: `let variable: string = "This is the String";`

Types can often be inferred so it is not always necessary to specify

Tuple = array that may contain differnt types

Any = can be anything (only use if no other option)

Types are defined for variables passed to functions and function returns

Void = used when a function is not returning anything

Object types can have optional properties (indicated with a ?)

Use union type ( type | type) for a variable that can be multiple types

Type alias used for types that will be repeated - typically object structures or union types - alias
name is capitalized

Interface is another object type name - can typically be used interchangeably with type but
interface can have new properties added later
