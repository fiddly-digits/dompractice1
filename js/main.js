const createCard = () => {
    let card = document.createElement("div")
    card.classList.add("card")
    card.style.width = "18rem"
    card.style.padding = "0"
    let cardHeader = document.createElement("div")
    let elementType = document.createTextNode("User")
    cardHeader.classList.add("card-header")
    cardHeader.appendChild(elementType)
    card.appendChild(cardHeader)
    return card
}

const createUnorderedList = () => {
    let unorderedList = document.createElement("ul")
    unorderedList.classList.add("list-group", "list-group-flush")
    return unorderedList
}

const createListElement = (user) => {
    let unorderedList = createUnorderedList()
    let card = createCard()
    let nameElement = document.createElement("li")
    nameElement.classList.add("list-group-item")
    let ageElement = document.createElement("li")
    ageElement.classList.add("list-group-item")
    let nameContent = document.createTextNode(`Name: ${user.name.first} ${user.name.last}`)
    let ageContent = document.createTextNode(`Age: ${user.dob.age} `)
    if(user.dob.age < 30) {
        card.style.background = "green"
        card.style.color = "white"
        nameElement.style.background = "green"
        nameElement.style.color = "white"
        ageElement.style.background = "green"
        ageElement.style.color = "white"
    }
    nameElement.appendChild(nameContent)
    ageElement.appendChild(ageContent)
    unorderedList.appendChild(nameElement)
    unorderedList.appendChild(ageElement)
    card.appendChild(unorderedList)
    return card
}



const printUsers = (data) => {
    data.forEach( (item) => document.getElementById("main-container").appendChild(createListElement(item)))
}

printUsers(mock)