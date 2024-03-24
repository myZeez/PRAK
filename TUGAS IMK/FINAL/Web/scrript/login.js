document.querySelector('.email-form').addEventListener('input', function () {
    const placeholderEmail = document.querySelector('.email-placeholder');
    
    if (this.value === '') {
      placeholderEmail.classList.remove('active-email');
    } else {
      placeholderEmail.classList.add('active-email');
    }
});

document.querySelector('.pw-form').addEventListener('input', function () {
    const placeholderPassword = document.querySelector('.pw-placeholder');
    
    if (this.value === '') {
      placeholderPassword.classList.remove('active-pw');
    } else {
      placeholderPassword.classList.add('active-pw');
    }
});