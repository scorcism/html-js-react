// Creating the body using DOM manupulation
// using
// 1) document.querySelectot() -> Selecting and HTMl element using a query String
// 2) document.createElement() -> For creating new HTML Element
// 3) document.appendChild() -> Adding child element to give an HTML element

const root = document.querySelector(".root")

root.appendChild(document.createElement('div')
    .appendChild(document.createElement('h2')
        .appendChild(document.createTextNode('Online Friends')).parentElement).parentElement
    .appendChild(document.createElement('ul')
        .appendChild(document.createElement('li')
            .appendChild(document.createElement('img')).parentElement
            .appendChild(document.createElement('span')
                .appendChild(document.createTextNode('Rohan Das'))).parentElement).parentElement
        .appendChild(document.createElement('li')
            .appendChild(document.createElement('img')).parentElement
            .appendChild(document.createElement('span')
                .appendChild(document.createTextNode('Rohan Das'))).parentElement).parentElement
        .appendChild(document.createElement('li')
            .appendChild(document.createElement('img')).parentElement
            .appendChild(document.createElement('span')
                .appendChild(document.createTextNode('Rohan Das'))).parentElement).parentElement
        .appendChild(document.createElement('li')
            .appendChild(document.createElement('img')).parentElement
            .appendChild(document.createElement('span')
                .appendChild(document.createTextNode('Rohan Das'))).parentElement).parentElement
    ).parentElement
)
document.querySelectorAll('img').forEach(img => img.setAttribute('src','../Assets/person.png'))

