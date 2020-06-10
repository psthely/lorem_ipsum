const footerData = {
    text: "Integer id volutpat risus"
}

const footerString = (
    '<div ' + addAttr('id', 'footerNav') + '></div>\
    <p ' + addAttr('class', 'moon-gray i') + '>' + footerData.text + '</p>'
)

// create component
const footer = document.createElement('footer')
footer.setAttribute('class', 'flex flex-column items-center mv5')
footer.innerHTML = footerString

export default footer
