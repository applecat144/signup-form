document.querySelector('button').addEventListener('click', () => {
    let password = document.querySelector('#password')
        , passwordConfirm = document.querySelector('#password-confirm');
    
    if(!(password.value === passwordConfirm.value)) {
        password.setCustomValidity('Passwords don\'t match');
        passwordConfirm.setCustomValidity('Passwords don\'t match');

        let pwContainer = document.querySelector('#signup-form > :nth-last-child(2)');
        let invalid = document.createElement('div')
        pwContainer.style.position = "relative";
        invalid.textContent = '* Passwords don\'t match';
        invalid.setAttribute("style", "position: absolute; color: red; font-size: 0.6rem; height: 1rem; top: 100%;");
        pwContainer.appendChild(invalid);
    }
})