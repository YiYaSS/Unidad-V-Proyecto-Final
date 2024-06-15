const container = document.getElementById('container');
const loginBtn = document.getElementById('login2');
const registerBtn = document.getElementById('register2');

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

