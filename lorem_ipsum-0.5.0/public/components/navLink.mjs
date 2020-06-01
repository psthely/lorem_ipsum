// component data
const navLinksData = [
    {
        name: "Lorem",
        href: "#"
    },
    {
        name: "Fusce",
        href: "#"
    },
    {
        name: "Etiam",
        href: "#"
    }
]

// component string declaration
let linkList = new String()
navLinksData.forEach(
    link => linkList += (
        '<li ' + addAttr('class', 'pa3') + '>\
            <a ' + addAttr('href', link.href) + ' ' + addAttr('class', 'no-underline pa2 f4 b bg-gray white') + '>'
                + link.name +
            '</a>\
        </li>'
    )
)

const navLinkString = (
    '<ul ' + addAttr('class', 'flex flex-row flex-wrap justify-center list pa0') + '>'
        + linkList +
    '</ul>'
)

// create component
const navLink = document.createElement('nav')
navLink.setAttribute('class', 'flex flex-column mw8 mv4')
navLink.innerHTML = navLinkString

export default navLink
