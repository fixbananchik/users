import generateTemplate from "./generate.js"
import { PagesTemplate } from "./pages.js"



function handleJson(data){
    users = data
    console.log('успешно обработан json')
    console.log(data)
    renderUsers(data)

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

function renderUsers(users){
    linesContainer.innerHTML = ''
    linesContainer.insertAdjacentHTML('beforeend', generateTemplate({
        User_name: 'User Name',
        company: 'Company',
        phone_number: 'Phone Number',
        email: 'Email',
        country: 'Country',
        gender: 'Gender', 
        ip_address: 'IP address'
    }))
    for(let element of users){
        linesContainer.insertAdjacentHTML('beforeend', generateTemplate(element));
    }
    const butoons = document.querySelectorAll('.line_users__button')
    console.log(butoons)
    for(let button of butoons){
        button.addEventListener('click', HandleAdditionalInfo)
    }
    pagesContainer.innerHTML = ''
    for(let i = 1; i < 26; i++){
        pagesContainer.insertAdjacentHTML('beforeend', PagesTemplate(i))
        pagesContainer.lastElementChild.addEventListener('click', handlePageClick)
    }
}


function filteMale(){
    return users.filter(user => user.gender === 'Male')
}

function HandleAdditionalInfo() {
    const additionalInfo = this.nextElementSibling
    const additionalInfo2 = additionalInfo.nextElementSibling
    additionalInfo.classList.toggle('text_additional--active')
    additionalInfo2.classList.toggle('text_additional--active')
}

function handlePageClick(){
    let currentPage = this.dataset.page

    let currentClickedPage = (this.dataset.page - 1) * 4
    renderUsers(users.slice(currentClickedPage, currentClickedPage + 4))

    console.log(currentPage)
    console.log(this)
    console.log(pagesContainer.children[currentPage-1])


    pagesContainer.children[currentPage-1].classList.add('page__button--active')
}


let users = []



fetch('https://mocki.io/v1/93b29e4b-1ffd-4e99-9b02-a62902e8c792').then(handleResponse).catch(handleError)

const linesContainer = document.querySelector('#block_users')
const filterButton = document.querySelector('#filter')
const pagesContainer = document.querySelector('.pages')
filterButton.addEventListener('click', renderUsers)
