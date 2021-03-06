'use strict'

// add an attribute to an element
// string: name
// string: value
// return: string
function addAttr(name, value) {
    return name + '="' + value + '"'
}

// render the app from components and parents
// Array<{HTMLElement, string},...>: components
function render(components) {
    components.forEach(component => {
        component.parents.split(' ').forEach(parent => {
            let componentCloneNode = component.name.cloneNode(true)
            document.querySelector(parent).appendChild(componentCloneNode)
        })
    })
}
