const footerData = {
    text: "Integer id volutpat risus"
}

const footer = (
    '<footer ' + addAttr('class', 'flex flex-column items-center') + '>\
    <div ' + addAttr('id', 'footerNav') + '></div>\
        <p>' + footerData.text + '</p>\
    </footer>'
)

export default footer
