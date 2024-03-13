const patternEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function showError(input, message, errorText) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector('small');

    small.innerText = message;
    small.style.visibility = 'visible';

    errorText = "ash#loremcompany.com";
    input.value = errorText;
    input.style.color="hsl(4, 100%, 67%)";
    input.style.background="#FACFCF";

}

function showSuccess() {
    const cardOne = document.getElementById('card');
    const cardTwo = document.getElementById('card2');
    const dismissButton = document.getElementById('dismissButton');

    cardTwo.style.display = 'block';
    cardOne.style.display = 'none';
    
    dismissButton.style.display = 'block'; // Menampilkan kembali tombol Dismiss message
}


function dismissMessage() {
    const dismissButton = document.getElementById('dismissButton');
    const cardOne = document.getElementById('card');
    const cardTwo = document.getElementById('card2');

    dismissButton.style.display ='none';
    cardOne.style.display ='block';
    cardTwo.style.display ='none';
    
    dismissButton.style.display = 'block';

}


function submitForm() {
    const email = document.getElementById('email');

    if (email.value.match(patternEmail)) {
        showSuccess();
        var newEmail = document.getElementById('email').value;
        document.getElementById('yourEmail').innerText = newEmail;
        
    } else {
        showError(email, "Valid email required");
        
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        submitForm();
    });
});

