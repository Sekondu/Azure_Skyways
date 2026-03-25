document.addEventListener("DOMContentLoaded", () => {
let signUp_btn = document.getElementsByClassName("sign_up_btn")[0];
let logIn_btn = document.getElementsByClassName("log_in_btn")[0];
let selected = document.getElementsByClassName("selected")[0];
let form = document.getElementsByClassName("left_section_main")[0];
let auth_btn = document.getElementsByClassName("authenticate_btns")[0];
let go_back = document.getElementsByClassName("go_back")[0];
let body = document.getElementsByTagName("body")[0];
const params = new URLSearchParams(window.location.search);
console.log(window.innerWidth);
console.log(window.innerHeight);
body.style.width = screen.width;
body.style.height = screen.height;
function signUp(){
    selected.classList.add("signUp");
    selected.classList.remove("logIn");

    let div = document.createElement("div");
    let label = document.createElement("label");
    label.textContent = "First Name";
    let input = document.createElement("input");
    input.placeholder = "eg. Ahmed";
    div.classList.add("first_name");
    div.appendChild(label);
    div.appendChild(input);
    auth_btn.after(div);
    form.style.marginTop = "50px";
}

function LogIn(){
    let checker = document.getElementsByClassName("first_name")[0];
        selected.classList.remove("signUp");
    selected.classList.add("logIn");
    if(checker){
    form.removeChild(checker);
    form.style.marginTop = "0px";
    }
}


if(params.get("auth") === "signUp"){
signUp();
}
else{
    LogIn();
}

signUp_btn.addEventListener("click", () => {
    let checker = document.getElementsByClassName("first_name")[0];
    if(!checker){
        selected.classList.remove("logIn");
        selected.classList.add("signUp");

    let div = document.createElement("div");
    let label = document.createElement("label");
    label.textContent = "First Name";
    let input = document.createElement("input");
    input.placeholder = "eg. Ahmed";
    div.classList.add("first_name");
    div.appendChild(label);
    div.appendChild(input);
    auth_btn.after(div);
    form.style.marginTop = "50px";
    }
    else{
        console.log("lll");
    }
    
})
logIn_btn.addEventListener("click", (e) => {
    let checker = document.getElementsByClassName("first_name")[0];
    if(checker){
        selected.classList.remove("signUp");
    selected.classList.add("logIn");
    form.removeChild(checker);
    form.style.marginTop = "0px";
    }
    
})

})

