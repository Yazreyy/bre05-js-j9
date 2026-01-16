export function fillArticle(articleId, userData){
    let element = document.querySelector(`#${articleId}`);
    let h2 = document.createElement('h2')
    let Text = createTextNode(user.firstName + " " + user.lastName)
    h2.appendChild(Text)
    element.appendChild(h2)
}