const navLink = [
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

for(let key in navLink) {
    $('#headerRight nav ul').innerHTML += (
        '<li><a href="' + navLink[key].href + '">' + navLink[key].name + '</a></li>'
    )
    $('footer nav ul').innerHTML += (
        '<li><a href="' + navLink[key].href + '">' + navLink[key].name + '</a></li>'
    )
}
