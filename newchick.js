$(document).ready(function(){
  document.querySelector('.toggle-password').addEventListener('click', function() {
    const passwordField = document.querySelector(this.getAttribute('toggle'));
    const icon = this.querySelector('i');
    
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
    } else {
      passwordField.type = 'password';
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
    }
  });
  document.querySelector('.toggle-password2').addEventListener('click', function() {
    const passwordField = document.querySelector(this.getAttribute('toggle'));
    const icon = this.querySelector('i');
    
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
    } else {
      passwordField.type = 'password';
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
    }
  });
  

    $('#myform').submit(function(e) {
        e.preventDefault();

        var isValid = true;
        // Validate Password field
        var password = $('#pass1').val().trim();
        if (password === '') {
          $('#passError1').text('*Password is required');
          isValid = false;
        }
        else if (password.length<8) {
                    $('#passError1').text('Password should be at least 8 characters long');
                    isValid=false;
        }
        // Validate email field
        var email = $('#email1').val().trim();
        if (email === '') {
          $('#emailError1').text('*Email is required');
          isValid = false;
        }
        if (isValid) {
            // Perform your form submission logic here
            alert('Form submitted successfully');
            this.submit();
          }
    });
    $('#regform').submit(function(e) {
      e.preventDefault();

      var isValid = true;
      // Validate Password field
      var password = $('#pass2').val().trim();
      if (password === '') {
        $('#passError2').text('*Password is required');
        isValid = false;
      }
      else if (password.length<8) {
                  $('#passError2').text('Password should be at least 8 characters long');
                  isValid=false;
      }
      // Validate email field
      var email = $('#email2').val().trim();
      if (email === '') {
        $('#emailError2').text('*Email is required');
        isValid = false;
      }
      var auth = $('#checkbox3:checked').val();
        if (!auth) {
          $('#checkError3').text('*checkbox should be checked');
          isValid = false;
        }
        else{
            $('#checkError3').text('');
        }
        var auth = $('#checkbox1:checked').val();
        if (!auth) {
          $('#checkError1').text('*checkbox should be checked');
          isValid = false;
        }
        else{
            $('#checkError1').text('');
        }
        var auth = $('#checkbox2:checked').val();
        if (!auth) {
          $('#checkError2').text('*checkbox should be checked');
          isValid = false;
        }
        else{
            $('#checkError2').text('');
        }
      if (isValid) {
          // Perform your form submission logic here
          alert('Form submitted successfully');
          this.submit();
        }
  });

    $('#email1').keyup(function() {
        var email = $(this).val();
    
        // Validate email using a regular expression
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          $('#emailError1').text('**Please enter a valid email address.');
        } else {
          $('#emailError1').text(''); // Clear the error message
        }
      });

      $('#email2').keyup(function() {
        var email = $(this).val();
    
        // Validate email using a regular expression
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          $('#emailError2').text('**Please enter a valid email address.');
        } else {
          $('#emailError2').text(''); // Clear the error message
        }
      });
      $('#checkbox3').change(function() {
        var auth = $('#checkbox3:checked').val();
        if (!auth) {
          $('#checkError3').text('*checkbox should be checked');
        }
        else{
            $('#checkError3').text('');
        }
      });
      $('#checkbox2').change(function() {
        var auth = $('#checkbox2:checked').val();
        if (!auth) {
          $('#checkError2').text('*checkbox should be checked');
        }
        else{
            $('#checkError2').text('');
        }
      });
      $('#pass1').keyup(function() {
        var password = $(this).val();
      
        // Validate age using a regular expression
       
        if (password.length<8) {
          $('#passError1').text('**Password should be at least 8 characters long');
        } else {
          $('#passError1').text(''); // Clear the error message
        }
      });
      $('#pass2').keyup(function() {
        var password = $(this).val();
      
        // Validate age using a regular expression
       
        if (password.length<8) {
          $('#passError2').text('**Password should be at least 8 characters long');
        } else {
          $('#passError2').text(''); // Clear the error message
        }
      });
      $('#checkbox1').change(function() {
        var auth = $('#checkbox1:checked').val();
        if (!auth) {
          $('#checkError1').text('*checkbox should be checked');
        }
        else{
            $('#checkError1').text('');
        }
      });
});