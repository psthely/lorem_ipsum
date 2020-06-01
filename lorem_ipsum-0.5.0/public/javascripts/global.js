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

// render the component to the parents elements
// HTMLElement: component
// string[]: parents
function addComponent(component, parents) {
    let parentNode = null
    parents.forEach(parent => {
        parentNode = document.querySelector(parent)
        parentNode.appendChild(component)
        component = component.cloneNode(true)
    })
}

function renderComponents(components) {
    components.forEach(component => {
        document.getElementById('app').appendChild(component)
    })
}
