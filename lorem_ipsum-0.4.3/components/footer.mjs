const footerData = {
    text: "Integer id volutpat risus"
}

const footer = (
    '<footer ' + addAttr('class', 'flex flex-column items-center mv5') + '>\
        <div ' + addAttr('id', 'footerNav') + '></div>\
        <p ' + addAttr('class', 'moon-gray i') + '>' + footerData.text + '</p>\
    </footer>'
)

export default footer
