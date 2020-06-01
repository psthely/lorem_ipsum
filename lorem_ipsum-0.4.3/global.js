'use strict'

// declare the $ querySelector
// string[]: selectors
// return: string[]
function $(selectors) {
    return selectors.split(' ')
}

// add an attribute to an element
// string: name
// string: value
// return: string
function addAttr(name, value) {
    return name + '="' + value + '"'
}

function constructApp(components) {
    components.forEach(component => {
        document.getElementById('app').appendChild(component)
    })
}

// render the component to the parents elements
// string: component
// string[]: parents
function render(component, parents) {
    let parentNode = null
    parents.forEach(parent => {
        parentNode = document.querySelector(parent)
        parentNode.innerHTML += component
    })
}
