

let submitButtonHTML = document.getElementById("submitButton")
submitButtonHTML.addEventListener("click", function(){
    let nameinputHTMl = document.getElementById("nameInput")
    name = nameinputHTMl.value

    let usernameHTML = document.getElementById("username")
    usernameHTML.innerHTML = "Hi " + name

    if(name = name) {
               let popUpModalHTML = document.getElementById("popUpModal")
               popUpModalHTML.style.display = "none"
    } 
})
