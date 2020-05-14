const header = [
    {
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Wikimedia_Foundation_logo_-_vertical.svg/500px-Wikimedia_Foundation_logo_-_vertical.svg.png",
        title: "Lorem Ipsum",
        description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        href: "#"
    }
]

$('header').setAttribute('class', 'container column')
$('header').innerHTML += (
    '<div id="headerLeft" class="container column">\
        <a href="' + header[0].href + '"><img src="' + header[0].imageSrc + '" alt=""></a>\
        <h1><a href="' + header[0].href + '">' + header[0].title + '</a></h1>\
    </div>\
    <div id="headerRight" class="container column">\
        <nav>\
            <ul class="container row wrap">\
            </ul>\
    </nav>\
    <p>' + header[0].description + '</p>\
    </div>'
)
