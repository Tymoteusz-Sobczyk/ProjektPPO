// important constant variables
const loginForm = document.getElementById('login-form')! as HTMLFormElement;
const cancel_button = document.getElementById('cancel-button')!;
const clock_element = document.getElementById('clock')!;
const date_element = document.getElementById('date')!;

// Updating on-page clock every 10 seconds + date if the time is 00:01
function updateClock() {
    dateTime = new Date().toLocaleString();
    console.log(dateTime);
    let time = dateTime.substring(12, 17);

    if (time == '00:01') {
        let date = dateTime.substring(0, 10);
        date_element.innerHTML = date;
    }

    clock_element.innerHTML = time;
}

// One-time setting date and time on page to the current ones 
let dateTime = new Date().toLocaleString();
console.log(dateTime);
let time = dateTime.substring(12, 17);
clock_element.innerHTML = time;
let date = dateTime.substring(0, 10);
date_element.innerHTML = date;

// Interval for updateClock func
setInterval(updateClock, 10000);

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

