const headerData = {
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Wikimedia_Foundation_logo_-_vertical.svg/500px-Wikimedia_Foundation_logo_-_vertical.svg.png",
    title: "Lorem Ipsum",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    href: "#"
}

const header = (
    '<header ' + addAttr('class', 'flex flex-column items-center') + '>\
        <div ' + addAttr('class', 'flex flex-column items-center mw-5') + '>\
            <a ' + addAttr('href', headerData.href) + addAttr('class', 'gray no-underline f4') + '><img ' + addAttr('src', headerData.imageSrc) + addAttr('class', 'w-100') + '></a>\
            <h1><a ' + addAttr('href', headerData.href) + '>' + headerData.title + '</a></h1>\
        </div>\
        <div>\
            <div ' + addAttr('id', 'headerNav') + '></div>\
            <p ' + addAttr('class', 'dark-gray tc f4 fw1 i') + '>' + headerData.description + '</p>\
        </div>\
    </header>'
)

export default header
