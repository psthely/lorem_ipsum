const sectionsData = [
    {
        title: "Lorem Ipsum",
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/6/65/001-teacher.svg",
        description: "Fusce elementum justo a elit tincidunt, nec dignissim purus feugiat",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum justo a elit tincidunt, nec dignissim purus feugiat. Etiam sed semper orci. Pellentesque vitae scelerisque augue. Cras pharetra erat tincidunt eros feugiat, non gravida nisl fringilla. Etiam finibus, lectus eget molestie lacinia, mauris ipsum suscipit purus, ut sagittis massa sem id tortor. Proin nec faucibus turpis. Aliquam vulputate facilisis tortor vel consectetur. Proin aliquam magna quis convallis pulvinar. Etiam convallis, mauris eu viverra consequat, sem risus luctus felis, lobortis rutrum mauris dui sit amet est. Aenean lacinia enim nec augue malesuada, sit amet pellentesque dui interdum. Donec at consectetur orci. Etiam ac lacus risus. Donec vitae ex luctus, rhoncus tellus vel, euismod massa. Integer at facilisis nibh, in varius tellus. Nulla purus est, vestibulum nec nunc eu, tincidunt scelerisque magna."
    },
    {
        title: "Ut sit amet",
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Button_DINA_Voraussetzungen_Digitale_Nachhaltigkeit_06_Geteiltes_Wissen.svg",
        description: "Cras pretium commodo felis, non tincidunt tellus elementum vel",
        content: "Ut sit amet diam hendrerit, sollicitudin orci in, dapibus erat. Cras pretium commodo felis, non tincidunt tellus elementum vel. Morbi ullamcorper imperdiet gravida. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis faucibus ac lacus quis commodo. Vivamus mattis tellus lectus, in egestas massa tincidunt sed. Quisque euismod tellus a malesuada finibus. Nullam finibus, dui in interdum tristique, orci metus semper neque, quis fermentum metus leo nec ipsum. Sed nec tempor tellus."
    },
    {
        title: "Fusce vitae magna ex",
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Degree.svg",
        description: "Curabitur id dignissim ligula, quis vulputate ligula",
        content: "Fusce vitae magna ex. Curabitur id dignissim ligula, quis vulputate ligula. Nullam volutpat lorem eu justo accumsan, quis hendrerit tellus hendrerit. Sed venenatis odio a risus ornare, vitae tincidunt odio pretium. Cras dapibus a ante quis ultrices. Nunc placerat semper lacinia. Quisque et molestie justo. Nunc elementum nisl quam, ut lacinia augue mollis a."
    },
    {
        title: "Cras bibendum dolor in varius finibus",
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/9/98/Disconnect_-_Donne_e_rete.png",
        description: "Cras elementum nisl velit, feugiat laoreet elit congue ut",
        content: "Cras bibendum dolor in varius finibus. Cras elementum nisl velit, feugiat laoreet elit congue ut. Cras sit amet est felis. Curabitur congue sollicitudin dolor id tincidunt. Donec lobortis tincidunt fermentum. Integer imperdiet lacus eu semper finibus. Morbi orci tortor, tincidunt ut sapien at, finibus facilisis lectus. Morbi eget accumsan dui. Duis aliquam at lectus et luctus. Cras non sagittis libero."
    }
]

let sectionList = new String()
sectionsData.forEach(
    section => sectionList += (
        '<section ' + addAttr('class', 'flex flex-column items-center mv3') + '>\
            <header ' + addAttr('class', 'flex flex-column items-center') + '>\
                <h1 ' + addAttr('class', 'f4 tc dark-blue ttu') + '>' + section.title + '</h1>\
                <img ' + addAttr('src', section.imageSrc) + ' ' + addAttr('class', 'mw5') + '/>\
                <h2 ' + addAttr('class', 'f4 silver') + '>' + section.description + '</h2>\
            </header>\
            <p ' + addAttr('class', 'f4 tj lh-copy light-silver') + '>\
            ' + section.content + '\
            </p>\
        </section>'
    )
)

const main = (
    '<main ' + addAttr('class', 'flex flex-column mw8') + '>'
    + sectionList +
    '</main>'
)

export default main
