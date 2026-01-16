export function fillArticle(articleId, userData){
    let element = document.querySelector(`#${articleId}`);
    let h2 = document.createElement('h2');
    let Text = document.createTextNode(userData.firstName + " " + userData.lastName);
    h2.appendChild(Text);
    element.appendChild(h2);
}