export function PagesTemplate(pageNumber){
    return `
    <div class="page__button" data-page='${pageNumber}'>
        <span class="button__text">${pageNumber}</span>
    </div>
    `
}