let formData = document.querySelector(".form");
let submitButton = document.querySelector(".button");
let errorMessages = document.querySelectorAll(".error-message");
let emptyfiendMessages = document.querySelectorAll(".empty-field");
let showPasswordBtn = document.querySelector(".btn");

let fnFlag, lnFlag, eFlag, pFlag;
let fnTarget, lnTarget, eTarget, pTarget;
let firstName, lastName, email, password, field;
let nameRegex = /^[a-z]+$/i;
let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let pwdRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;


for (let errorMessage of errorMessages)
    errorMessage.classList.add("d-none");
for (let emptyfiendMessage of emptyfiendMessages)
    emptyfiendMessage.classList.add("d-none");



formData.addEventListener("keyup", (event) => {
    event.preventDefault();
    field = event.target.dataset.key;
    switch (field) {
        case "firstName":
            firstName = event.target.value;
            fnTarget = event.target;
            break;
        case "lastName":
            lastName = event.target.value;
            lnTarget = event.target;
            break;
        case "email":
            email = event.target.value;
            eTarget = event.target;
            break;
        case "password":
            password = event.target.value;
            pTarget = event.target;
            break;
        default:
            firstName = lastName = email = password = "";
            break;
    }

})

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (firstName) {
        emptyfiendMessages[0].classList.add("d-none");
        fnTarget.classList.remove("error");
        if (!nameRegex.test(firstName)) {
            errorMessages[0].classList.remove("d-none");
            fnTarget.classList.add("error");
            fnFlag = false;
        }
        else {
            errorMessages[0].classList.add("d-none");
            fnTarget.classList.remove("error");
            fnFlag = true;
        }
    }
    else {
        emptyfiendMessages[0].classList.remove("d-none");
        fnTarget.classList.add("error");
    }

    if (lastName) {
        emptyfiendMessages[1].classList.add("d-none");
        lnTarget.classList.remove("error");
        if (!nameRegex.test(lastName)) {
            errorMessages[1].classList.remove("d-none");
            lnTarget.classList.add("error");
            lnFlag = false;
        }
        else {
            errorMessages[1].classList.add("d-none");
            lnTarget.classList.remove("error");
            lnFlag = true;
        }
    }
    else {
        emptyfiendMessages[1].classList.remove("d-none");
        lnTarget.classList.add("error");
    }

    if (email) {
        emptyfiendMessages[2].classList.add("d-none");
        eTarget.classList.remove("error");
        if (!emailRegex.test(email)) {
            errorMessages[2].classList.remove("d-none");
            eTarget.classList.add("error");
            eFlag = false;
        }
        else {
            errorMessages[2].classList.add("d-none");
            eTarget.classList.remove("error");
            eFlag = true;
        }
    }
    else {
        emptyfiendMessages[2].classList.remove("d-none");
        eTarget.classList.add("error")
    }

    if (password) {
        emptyfiendMessages[3].classList.add("d-none");
        pTarget.classList.remove("error");
        if (!pwdRegex.test(password)) {
            errorMessages[3].classList.remove("d-none");
            pTarget.classList.add("error");
            pFlag = false;
        }
        else {
            errorMessages[3].classList.add("d-none");
            pTarget.classList.remove("error");
            pFlag = true;
        }
    }
    else {
        emptyfiendMessages[3].classList.remove("d-none");
        pTarget.classList.add("error");
    }

    if (fnFlag && lnFlag && eFlag && pFlag) {
        fnTarget.value = lnTarget.value = eTarget.value = pTarget.value = " ";
        window.location.href = "/success.html";
    }



})

showPasswordBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (pTarget.getAttribute("type") === "text") {
        pTarget.setAttribute("type", "password");
        showPasswordBtn.innerHTML = `<span class="material-icons-outlined bt2"> visibility_off </span>`;
    }
    else {
        pTarget.setAttribute("type", "text");
        showPasswordBtn.innerHTML = `<span class="material-icons-outlined bt2"> visibility </span>`;
    }


})