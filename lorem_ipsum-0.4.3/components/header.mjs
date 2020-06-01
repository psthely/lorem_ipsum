// component data
const headerData = {
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Wikimedia_Foundation_logo_-_vertical.svg/500px-Wikimedia_Foundation_logo_-_vertical.svg.png",
    title: "Lorem Ipsum",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    href: "#"
}

// component string declaration
const headerString = (
    '<div ' + addAttr('class', 'flex flex-column items-center mw5') + '>\
        <a ' + addAttr('href', headerData.href) + '>\
            <img ' + addAttr('src', headerData.imageSrc) + addAttr('class', 'w-100') + '>\
        </a>\
        <h1 ' + addAttr('class', 'f2') + '>\
            <a ' + addAttr('href', headerData.href) + addAttr('class', 'gray no-underline') + '>' + headerData.title + '</a>\
        </h1>\
    </div>\
    <div>\
        <div ' + addAttr('id', 'headerNav') + '></div>\
        <p ' + addAttr('class', 'silver tc f4 fw1 i') + '>' + headerData.description + '</p>\
    </div>'
)

// create component
const header = document.createElement('header')
header.setAttribute('class', 'flex flex-column items-center')
header.innerHTML = headerString

export default header
