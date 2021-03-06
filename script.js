const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


function IsEmailValid(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};


function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = form.querySelector('small');
    small.innerHTML = message.charAt(0).toUpperCase() + message.slice(1);
};


function showSucess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
};



// Event Handler
form.addEventListener('submit', function(e) {
    e.preventDefault();

    if(username.value === ' '){
        showError(username,'Username is required')
    }else{
     showSucess(username);
    }

    if(email.value === ''){
        showError(email,'Email is required')
    }
    else if(!IsEmailValid(email.value)){
        showError(email,'Email is not Valid')
    }
    else{
     showSucess(email);
    }

    if(password.value === ''){
        showError(password,'Password is required')
    }else{
     showSucess(password);
    }

    if(password2.value === ''){
        showError(password2,'Confirm Password is required')
    }else{
      showSucess(password2);
    }
});
