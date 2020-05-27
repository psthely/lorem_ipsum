# My Lorem Ipsum
This project starts from a simple HTML/CSS static web page. Then JavaScript is added
to structure Data and components.

## lorem_ipsum-0.4.x

### 0.4.3
[Netlify demo](https://pedantic-curie-cd7ba0.netlify.app/)
Declaring components as JavaScript modules to import in index.html. Removed the css files linked to the components
and replace it by tachyons classes directly to the .mjs component declaration.

### 0.4.2
The `$(selectors)` function now accepts multiple css selectors, so you can render a same
component to different ParentNodes.

### 0.4.1
A new function `addAttr(name, value)` is declared. This is more convenient to add
any type of attributes and values to the HTML elements.

### 0.4.0
- The components are now declared as Strings. The index.html file only contains
JavaScript to declare variables (ids, classes) and functions, declare each
component individually and render the components on the Web page.
- Each component have its own js and css file. The component.js contains the data,
the JavaScript treatments and the HTML structure of the component.
- Writing the main JavaScript code into the index.html file is I think more convenient
to understand the flow of execution.