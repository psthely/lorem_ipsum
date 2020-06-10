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

// render the app from components and parents
// HTMLElement[ [HTMLElement, String], ... ]: components
function render(components) {
    components.forEach(component => {
        if( $(component[1]).length === 1 )
            document.querySelector(component[1]).appendChild(component[0])
    })
}
