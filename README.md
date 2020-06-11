# react-flux-redux

PluralSight learning

React - Components
React Router - Routing
Clinet-side Router
Instantaneous page transitions
Declarative
Nested views map to nested routes
Flux - Data Flow
Uni-directional data flow library created by facebook to compliment react.
Data updates flow in one direction (unlike angular's two way data binding that tries both UI and data in sync).
Easy to debug and scale by avoiding complex interactions that can occur between mulitiple view and view modals in traditional two way binding approaches.
More a pattern than a library
Redux is a popular flavour

NPM: Node Package Manager
BABEL: Transpile - Code compiler to support latest js versions to support in all browsers
Webpack: Code bundler
ESLint: Check our code for minor issue and finds common typos and syntax erros and enforce us to coding standadrs.

## Hooks:

- Only works with function component
- similar to class component life cycle methods
- Why hooks?
  - Use functions for (nearly) everything
  - Avoids 'this' confusion
  - Use the same React concepts
  - Better modal the way react works
  - Easier to work with
  - Share logic between components
- react includes around 10 different hooks and only 3 are commonly used.

  1.  useState - to handling the state: Local state
  2.  useEffect - to handling side effects
  3.  useContext - for consuming data in context.

  Rules of Hooks

  1. Only call hooks from function componets, u can't call hooks from class components or plain javascript functions.
  2. It must be called from inside a react function component or from our own custom hooks.
  3. Hooks must be declared at the top level.
     - Dont wrap in hooks in if statement, loops,or nested funcs.
     - React puts hooks into an array and tracks the order of our hooks called.

  propTypes: Allows you to document what kind of data your component accepts.
  You can specify the dataTypes (lke Object, func, string, Number or boolean) and isRequired to tell whether its a mandatory prop.
  Like validation.
  Note: For performance, propTypes only run in development mode, so u can think this as more of a way to document your expectation and catch issues during development.
  Note: For optional props, you may find useful to use defaultProps.

## React Component Life Cycle

- Mounting
  - constuctor
    Constuctor is called before the component is mounted. So this function is great spot to initialize state and bind event methods.
    Note: you dont have to use contructor to initialize state.
  - render:
    render runs anytime when the states or props are changed. Render typically returns JSx but u can also returns numbers, boolens, strings, arrays.
    Note: Rendre function should be pure, it shouldn't modify state or dorectly interact with browser
- ComponentDidMount:
  - renders immediately after component is mounted. by the time this function called, the component DOM exists.
  - This is the handy part to access the DOM, setTimers, make http calls, setState
  - Updating
  - render
- componentDidUpdate():
  - This is not called on initial render.
  - Called after updates are flushed to the DOM.
  - Work with DOM after component get updated and rerendered on DOM
- Umounting
- componentWillUnmount():

  - runs just before component is removed from DOM
  - Cleanup by destroying any related resources.

  THis isnt a complete list but these are the lifecycle methods you're most likely to use.

## Routers

1.  HashRouter ex: #about
2.  BrowserRouter ex: /about (Preferred)
3.  MemoryRouter ex: No URL

## Route

- Link
- Navlink

## Switch

    selects first matching element.

## Redirect

    from
    to

## Prompt

    when
    message

## Flux

Parts -
Action : ex: Delete user
Dispatcher: Actions are handled by centralised dispacther. Dispacther ends up making calls to store and notify everyone who cares.
Store: Holds the app state and logic

## Useful terms

dependency array

## React development environment

Compile JSX
Transpile Jsx
Lint
Generate index.html
Reload on save

Webpack : Code bundler for js and react
Babel: Javascript compiler that lets us to use next generation javascript today
Transpiles modern js code to browser understandable
Compiles JsX to JS

Four ways to create REact component

```
createClass
  var Helloworld = React.createClass({
    render: function() {
      return (
        <h1>Hello World</h2>
      );
    }
  });
```

ES class

```
  class HelloWorld extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
      return (
        <h1>Hello World</h2>
      )
    }
  }
```

Function Component

```
  function HelloWorld() {
    return (
      <h1>Hello World</h1>
    )
  }
```

Arrow function

```
  const HelloWorld = () => <h1>Hello world</h1>
```

Container vs Presentational
Smart vs Dumb
Stateful vs StateLess
Controller View vs View

Container component = Where all the redux is stored or handled
Presentational = Pure markup no Redux
