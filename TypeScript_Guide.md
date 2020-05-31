### TypeScript Guide



##Why and How to use TypeScript in your React App?

###1-Code Suggestions
TypeScript populates with the options while you type which saves a lot of dev effort of figuring out what should be written. Writing in TypeScript makes it self explanatory. E.g if a new developer joins the team and he is reusing a component, TypeScript will suggest what are the props required in the following screenshot.

###2-Highlight the errors as early as possible
Suppose if you are preparing to launch a satellite, would you like to know all the issues while you are building and fix it before the satellite leaves your launchpad or you would launch it and if it breaks then fix and relaunch? Without any thought, obviously, we want to know the issues as soon as possible.
While you are writing, TypeScript tells you what is wrong.

###3-Self-documenting code
The type, interfaces, enums, types for function parameter and its return type, etc makes the whole code base more predictive.
TypeScript helps in self-documenting the whole code base and the code reading experience is improved. TypeScript helps developers to understand each other’s code easily.


### From js to ts

How to migrate  from js to ts in React Native 

-[React native and TypeScript]

-[TypeScript React Native Starter(i use this one)]

-[Extra tsconfig rules]

-[What does React Native + TypeScript look like]


### TypeScript in TL DR way :)

##Basic types
type | description
------------ | -------------
number | It is used to represent both Integer as well as Floating-Point numbers
void | Generally used on function return-types
boolean | 
string |It is used to represent a sequence of characters
null | It is used when an object does not have any value
undefined | Denotes value given to uninitialized variable
tuple | Tuple types allow you to express an array with a fixed number of elements whose types are known 
enum | A helpful addition to the standard set of datatypes from JavaScript is the enum. As in languages like C#, an enum is a way of giving more friendly names to sets of numeric values.
never |  [never]
object |  object is a type that represents the non-primitive type, i.e. anything that is not number, string, boolean, bigint, symbol, null, or undefined.
type assertions  |  [type assertions]
any | If variable is declared with any data-type then any type of value can be assigned to that variable (dont use this type :D )
#####[For see how to use each types with example click here]  

##Advanced types
type | description
------------ | -------------
Union Types # | Union types are closely related to intersection types [Union Types]

#####[For see how to use advanced types with example click here]  


##Interfaces
One of TypeScript’s core principles is that type checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural subtyping”. In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.

####Our First Interface #
```sh
function printLabel(labeledObj: { label: string }) {
    console.log(labeledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);
  ]
```

The type checker checks the call to printLabel. The printLabel function has a single parameter that requires that the object passed in has a property called label of type string. Notice that our object actually has more properties than this, but the compiler only checks that at least the ones required are present and match the types required.

##Type Inference in TypeScript
[Type Inference in TypeScript]
##Functions
####Our first functions with Type
Functions in Javascript

```sh

// Named function
function add(x, y) {
    return x + y;
}

// Anonymous function
let myAdd = function(x, y) { return x + y; };
```
Functions in Typescript
```sh

function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function(x: number, y: number): number { return x + y; };

```












###React and Typescript

####Types or Interfaces?

Interfaces are different from types in TypeScript, but they can be used for very similar things as far as common React uses cases are concerned. Here's a helpful rule of thumb:

always use interface for public API's definition when authoring a library or 3rd party ambient type definitions.

consider using type for your React Component Props and State, because it is more constrained.

Types are useful for union types (e.g. type MyType = TypeA | TypeB) whereas Interfaces are better for declaring dictionary shapes and then implementing or extending them.

####Basic Prop Types Examples
```sh

type AppProps = {
  message: string;
  count: number;
  disabled: boolean;
  /** array of a type! */
  names: string[];
  /** string literals to specify exact string values, with a union type to join them together */
  status: "waiting" | "success";
  /** any object as long as you dont use its properties (not common) */
  obj: object;
  obj2: {}; // almost the same as `object`, exactly the same as `Object`
  /** an object with defined properties (preferred) */
  obj3: {
    id: string;
    title: string;
  };
  /** array of objects! (common) */
  objArr: {
    id: string;
    title: string;
  }[];
  /** any function as long as you don't invoke it (not recommended) */
  onSomething: Function;
  /** function that doesn't take or return anything (VERY COMMON) */
  onClick: () => void;
  /** function with named prop (VERY COMMON) */
  onChange: (id: number) => void;
  /** alternative function type syntax that takes an event (VERY COMMON) */
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  /** an optional prop (VERY COMMON!) */
  optional?: OptionalType;
};
```
####Functional Components
```sh
type AppProps = { message: string }; /* could also use interface */

const App: React.FC<AppProps> = ({ message }) => (
  <div>{message}</div>
);
App.defaultProps = {
  message: 'some default message'
};
```
Another example

```sh
type Props = {
  /** color to use for the background */
  color?: string;
  /** standard children prop: accepts any valid React Node */
  children: React.ReactNode;
  /** callback function passed to the onClick handler*/
  onClick: ()  => void;
}

const Button: React.FC<Props> = ({ children, color = 'tomato', onClick }) => {
   return <button style={{ backgroundColor: color }} onClick={onClick}>{children}</button>
}
```
In this <Button /> component, we use a type for our props. Each prop has a short description listed above it to provide more context to other developers. The ? after the prop named color indicates that it’s optional. The children prop takes a React.ReactNode because it accepts everything that’s a valid return value of a component (read more here). To account for our optional color prop, we use a default value when destructuring it. This example should cover the basics and show you have to write types for your props and use both optional and default values.

In general, keep these things in mind when writing your props in a React and TypeScript project:

Always add descriptive comments to your props using the TSDoc notation /** comment */.
Whether you use types or interfaces for your component props, use them consistently.
When props are optional, handle appropriately or use default values.
###Hooks
####useState


```sh
type User = {
  email: string;
  id: string;
}
// the generic is the < >
// the union is the User | null
// together, TypeScript knows, "Ah, user can be User or null".
const [user, setUser] = useState<User | null>(null);

```

####useEffect
When using useEffect, take care not to return anything other than a function or undefined, otherwise both TypeScript and React will yell at you. This can be subtle when using arrow functions:
```sh
function DelayedEffect(props: { timerMs: number }) {
  const { timerMs } = props;
  // bad! setTimeout implicitly returns a number because the arrow function body isn't wrapped in curly braces
  useEffect(
    () =>
      setTimeout(() => {
        /* do stuff */
      }, timerMs),
    [timerMs]
  );
  return null;
}

```

####useReducer
```sh
type AppState = {};
type Action =
  | { type: "SET_ONE"; payload: string }
  | { type: "SET_TWO"; payload: number };

export function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "SET_ONE":
      return {
        ...state,
        one: action.payload // `payload` is string
      };
    case "SET_TWO":
      return {
        ...state,
        two: action.payload // `payload` is number
      };
    default:
      return state;
  }
}
```




####For More Read
* https://www.sitepoint.com/react-with-typescript-best-practices
* https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter
* https://github.com/typescript-cheatsheets/react-typescript-cheatsheet
* https://www.typescriptlang.org/docs/handbook 
*  https://devhints.io/typescript
* https://fettblog.eu/typescript-react/components




[React Native]: <https://facebook.github.io/react-native/docs/getting-started>
[React Native Gesture Handler (Android) ]: <https://kmagiera.github.io/react-native-gesture-handler/docs/getting-started.html#android>
[React Native RTL Support]: <https://facebook.github.io/react-native/blog/2016/08/19/right-to-left-support-for-react-native-apps#making-an-app-rtl-ready>
[on Trello]: <https://trello.com/b/51mP8jB1/elegant-react-native>
[Invitation Link]: <https://trello.com/invite/b/51mP8jB1/f66ec266f4d71ac3ae8d2b6d21b9c32f/elegant-react-native>  
[react native and type script]: https://facebook.github.io/react-native/docs/typescript
[What does React Native + TypeScript look like]:https://facebook.github.io/react-native/docs/typescript#what-does-react-native--typescript-look-like
[TypeScript React Native Starter(i use this one)]:https://github.com/microsoft/TypeScript-React-Native-Starter
[never]:https://www.typescriptlang.org/docs/handbook/basic-types.html#never
[type assertions]:https://www.typescriptlang.org/docs/handbook/basic-types.html#object
[for see how to use each types with example click here]: https://www.typescriptlang.org/docs/handbook/basic-types.html#object
[Type Inference in TypeScript]:https://www.tutorialsteacher.com/typescript/type-inference
[For see how to use advanced types with example click here]: http://www.typescriptlang.org/docs/handbook/advanced-types.html
[Union Types]: http://www.typescriptlang.org/docs/handbook/advanced-types.html#union-types
[extra tsconfig rules]:https://gist.github.com/wcandillon/cf5882e64695ee8f572c3251e258a90b#file-tsconfig-json-L1
