const footer = {
    text: "Integer id volutpat risus"
}

$('footer').setAttribute('class', 'container column')
$('footer').innerHTML += (
    '<nav>\
        <ul class="container row wrap">\
        </ul>\
    </nav>\
    <p>' + footer.text + '</p>'
)