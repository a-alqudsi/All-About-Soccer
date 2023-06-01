function displayDateTime() {
    const today = new Date();
    const dateOptions = { month: 'long', day: 'numeric', year: 'numeric' };
    const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
    
    const date = today.toLocaleDateString('en-US', dateOptions);
    const time = today.toLocaleTimeString('en-US', timeOptions);
    
    let timeOfDayMessage;
    
    if (today.getHours() >= 0 && today.getHours() < 12) {
      timeOfDayMessage = "Good morning!";
    } else if (today.getHours() >= 12 && today.getHours() < 18) {
      timeOfDayMessage = "Good afternoon!";
    } else {
      timeOfDayMessage = "Good evening!";
    }
    
    const welcomeMessage = `Welcome! Today is ${date}. ${timeOfDayMessage}`;
    const dateTimeDisplay = document.getElementById("date-time-display");
    dateTimeDisplay.textContent = welcomeMessage;
  }
  window.onload = displayDateTime;

  const form = document.querySelector('#myForm');
  const fullName = document.querySelector('#fullName');
  const email = document.querySelector('#email');
  const phone = document.querySelector('#phone');
  const options = document.querySelector('#options');
  const comments = document.querySelector('#comments');
  const firstNameError = document.querySelector('#firstNameError');
  const LastNameError = document.querySelector('#lastNameError');
  const emailError = document.querySelector('#emailError');
  const phoneError = document.querySelector('#phoneError');
  const optionsError = document.querySelector('#optionsError');
  const commentsError = document.querySelector('#commentsError');
  
  form.addEventListener('submit', function (event) {
    let isValid = true;
  
    if (!firstName.value.trim()) {
      firstNameError.innerText = 'First name is required';
      isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(firstName.value)) {
      firstNameError.innerText = 'First name should only contain letters';
      isValid = false;
    } else {
      firstNameError.innerText = '';
    }
  
    if (!lastName.value.trim()) {
        lastNameError.innerText = 'Last name is required';
        isValid = false;
      } else if (!/^[a-zA-Z\s]+$/.test(firstName.value)) {
        lastNameError.innerText = 'Last name should only contain letters';
        isValid = false;
      } else {
        lastNameError.innerText = '';
      }

    if (!email.validity.valid) {
      emailError.innerText = 'Please enter a valid email address';
      isValid = false;
    } else {
      emailError.innerText = '';
    }
  
    if (!phone.validity.valid) {
      phoneError.innerText = 'Please enter a valid phone number (XXX-XXX-XXXX)';
      isValid = false;
    } else {
      phoneError.innerText = '';
    }
  
    if (options.selectedOptions.length === 0) {
      optionsError.innerText = 'Please select at least one option';
      isValid = false;
    } else {
      optionsError.innerText = '';
    }
  
    if (!comments.value.trim()) {
      commentsError.innerText = 'Comments are required';
      isValid = false;
    } else {
      commentsError.innerText = '';
    }
  
    if (!isValid) {
      event.preventDefault();
    }
  });