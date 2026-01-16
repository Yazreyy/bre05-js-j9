export function setUpAlert(buttonId, message){
    let btn = document.querySelector(`#${buttonId}`)
    btn.addEventListener("click" , (event) =>{
        window.alert(message)
    })
}

