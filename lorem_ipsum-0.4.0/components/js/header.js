const headerData = {
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Wikimedia_Foundation_logo_-_vertical.svg/500px-Wikimedia_Foundation_logo_-_vertical.svg.png",
    title: "Lorem Ipsum",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    href: "#"
}

const header = (
    '<header ' + addClass.containerColumn + '>\
        <div ' + addId.headerLeft + ' ' + addClass.containerColumn + '>\
            <a href="' + headerData.href + '"><img src="' + headerData.imageSrc + '" alt=""></a>\
            <h1><a href="' + headerData.href + '">' + headerData.title + '</a></h1>\
        </div>\
        <div ' + addId.headerRight + '>\
        <div ' + addId.headerNav + '></div>\
        <p>' + headerData.description + '</p>\
        </div>\
    </header>'
)
