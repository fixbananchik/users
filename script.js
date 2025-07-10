import generateTemplate from "./generate.js"




function handleJson(data){
    users = data
    console.log('успешно обработан json')
    console.log(data)
    renderUsers()

}

function handleError(error){
    console.log('произошла ошибка в json')
    console.log(error)
}

function handleResponse(response){
    console.log('Все хорошо')
    console.log(response)

    response.json().then(handleJson).catch(handleError)
}

function renderUsers(){
    linesContainer.innerHTML = ''
    linesContainer.insertAdjacentHTML('beforeend', generateTemplate({
        User_name: 'User Name',
        company: 'Company',
        phone_number: 'Phone Number',
        email: 'Email',
        country: 'Country'
    }))
    for(let element of users){
        linesContainer.insertAdjacentHTML('beforeend', generateTemplate(element));
    }
    const butoons = document.querySelectorAll('.line_users__button')
    console.log(butoons)
    for(let button of butoons){
        button.addEventListener('click', HandleAdditionalInfo)
    }
}

function filterUsers(){
    renderUsers(filterGender())
}

function filterGender(){
    return users.filter(user => user.gender === 'Male')
}

function HandleAdditionalInfo() {
    const additionalInfo = this.nextElementSibling
    additionalInfo.classList.toggle('text_additional--active')
}

let users = []



fetch('https://mocki.io/v1/93b29e4b-1ffd-4e99-9b02-a62902e8c792').then(handleResponse).catch(handleError)

const linesContainer = document.querySelector('#block_users')
const filterButton = document.querySelector('#filter')
filterButton.addEventListener('click', renderUsers)
