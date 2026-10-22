// important constants
const loginForm = document.getElementById('login-form')! as HTMLFormElement;
const cancel_button = document.getElementById('cancel-button')!;


// Function to make any html element appear
function popUp(element: string) {
    const documentElement = document.getElementById(element)!;
    documentElement.style.display = 'flex';
}

cancel_button.addEventListener('click', () => {
    loginForm.style.display = 'none';
});

// Closing pop up on click on dark background
loginForm.onclick = (event) => {
    if (event.target === loginForm) {
        loginForm.style.display = 'none';
    }
};
// Setting up event listener for #login-form form
interface LoginData {
    login: string;
    password: string;
}


loginForm.onsubmit = (event) => {
    event.preventDefault();
    let LoginData = {
        login: (document.getElementById('username') as HTMLInputElement).value,
        password: (document.getElementById('password') as HTMLInputElement).value,
    };
    console.log(LoginData);
}

