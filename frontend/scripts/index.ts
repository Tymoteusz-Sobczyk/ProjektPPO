// Function to make any html element appear
function popUp(element: string) {
    const documentElement = document.getElementById(element)!;
    documentElement.style.display = 'block';
}

function closePopUp(element: string) {
    const documentElement = document.getElementById(element)!;
    documentElement.style.display = 'none';
}
// Setting up event listener for #login-form form
interface LoginData {
    login: string;
    password: string;
}

const loginForm = document.getElementById('login-form')! as HTMLFormElement;
loginForm.onsubmit = (event) => {
    event.preventDefault();
    let LoginData = {
        login: (document.getElementById('username') as HTMLInputElement).value,
        password: (document.getElementById('password') as HTMLInputElement).value,
    };
    console.log(LoginData);
}
