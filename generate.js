export default function generateTemplate(content){
    return `
        <div class="line_users">

                <span class="text_secondary">${content?.User_name}</span>
                <span class="text_secondary">${content?.company}</span>
                <span class="text_secondary">${content?.phone_number}</span>
                <span class="text_secondary">${content?.email}</span>
                <span class="text_secondary">${content?.country}</span>
                <div class="line_users__button">More info</div>
                <span class="text_additional">${content?.gender}</span>
                <span class="text_additional">${content?.ip_address}</span>
    
        </div>
    `
}
