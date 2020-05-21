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
let linkList = ''
navLinksData.forEach(
    link => linkList += '<li><a href="' + link.href + '">' + link.name + '</a></li>'
)

const navLink = (
    '<nav>\
        <ul ' + addClass.containerRowWrap + '>'
        + linkList +
        '</ul>\
    </nav>'
)
