// script.js
window.checkPasswordStrength = function (passwordInputId, section1Id, section2Id, section3Id, textAnsverClass) {
    const passwordInput = document.getElementById(passwordInputId);
    const section1 = document.getElementById(section1Id);
    const section2 = document.getElementById(section2Id);
    const section3 = document.getElementById(section3Id);
    const textAnsver = document.querySelector(textAnsverClass);

    const password = passwordInput.value;
    const length = password.length;

    section1.style.backgroundColor = "gray";
    section2.style.backgroundColor = "gray";
    section3.style.backgroundColor = "gray";

    if (length === 0) {
        // Empty password
        return;
    } else if (length < 8) {
        // Password has less than 8 characters
        section1.style.backgroundColor = "red";
        section2.style.backgroundColor = "red";
        section3.style.backgroundColor = "red";
        textAnsver.textContent = "Password has less than 8 characters";
    } else if (/^[a-zA-Z]+$/.test(password) || /^[0-9]+$/.test(password) || /^[^a-zA-Z0-9]+$/.test(password)) {
        // Only letters/digits/symbols - Easy
        textAnsver.textContent = "";
        section1.style.backgroundColor = "red";
        textAnsver.textContent = "The password is easy";
    } else if (/^[a-zA-Z]+[0-9]+$/.test(password) || /^[a-zA-Z]+[^a-zA-Z0-9]+$/.test(password) || /^[0-9]+[^a-zA-Z0-9]+$/.test(password)) {
        // Combination of letters-symbols/letters-digits/digits-symbols - Medium
        textAnsver.textContent = "";
        section1.style.backgroundColor = "yellow";
        section2.style.backgroundColor = "yellow";
        textAnsver.textContent = "The password is Medium";
    } else {
        // Has letters, symbols, and numbers - Strong
        textAnsver.textContent = "";
        section1.style.backgroundColor = "green";
        section2.style.backgroundColor = "green";
        section3.style.backgroundColor = "green";
        textAnsver.textContent = "The password is Strong";
    }
};

window.togglePasswordVisibility = function (passwordInputId, buttonId) {
    const passwordInput = document.getElementById(passwordInputId);
    const button = document.getElementById(buttonId);

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        button.classList.add("input-button-hide");
        button.classList.remove("input-button");
    } else {
        passwordInput.type = "password";
        button.classList.add("input-button");
        button.classList.remove("input-button-hide");
    }
};

const registerBtn = document.getElementById("register");
const container = document.getElementById("container");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
    container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
});
