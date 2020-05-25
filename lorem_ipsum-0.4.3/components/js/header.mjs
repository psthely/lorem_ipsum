const headerData = {
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Wikimedia_Foundation_logo_-_vertical.svg/500px-Wikimedia_Foundation_logo_-_vertical.svg.png",
    title: "Lorem Ipsum",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    href: "#"
}

const header = (
    '<header ' + addAttr('class', 'container column') + '>\
        <div ' + addAttr('id', 'headerLeft') + ' ' + addAttr('class', 'container column') + '>\
            <a ' + addAttr('href', headerData.href) + '><img ' + addAttr('src', headerData.imageSrc) + '></a>\
            <h1><a ' + addAttr('href', headerData.href) + '>' + headerData.title + '</a></h1>\
        </div>\
        <div ' + addAttr('id', 'headerRight') + '>\
        <div ' + addAttr('id', 'headerNav') + '></div>\
        <p>' + headerData.description + '</p>\
        </div>\
    </header>'
)

export default header
