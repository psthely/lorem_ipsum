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

// construct the list of links
let linkList = new String()
navLinksData.forEach(
    link => linkList += '<li><a ' + addAttr('href', link.href) + '>' + link.name + '</a></li>'
)

const navLink = (
    '<nav>\
        <ul ' + addAttr('class', 'flex flex-row flex-wrap justify-center') + '>'
        + linkList +
        '</ul>\
    </nav>'
)

export default navLink
