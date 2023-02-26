// Functional Component

const root = document.querySelector(".root")

root.appendChild(document.createElement('div')
    .appendChild(document.createElement('h2')
        .appendChild(document.createTextNode('Online Friends')).parentElement).parentElement
    .appendChild(document.createElement('ul')

        .appendChild(OnlineFriend("Rohan Das")).parentElement
        .appendChild(OnlineFriend("Bhu")).parentElement
        .appendChild(OnlineFriend("Gambit")).parentElement
        .appendChild(OnlineFriend("Prashant")).parentElement
        
    ).parentElement
)

function OnlineFriend(fullName){
    return document.createElement('li')
            .appendChild(document.createElement('img')).parentElement
            .appendChild(document.createElement('span')
                .appendChild(document.createTextNode(fullName)).parentElement).parentElement
}


document.querySelectorAll('img').forEach(img => img.setAttribute('src','../Assets/person.png'))

