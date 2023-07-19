var verificationNumber = Math.floor(Math.random() * 9000) + 1000;
var attemptsLeft = 3;

function generateConfirmationMessage(firstName, email) {
  var message = 'Dear ' + firstName + ',\n';
  message += 'Thank you for your inquiry. A 4 digit verification number has been sent to your email: ' + email;
  message += ', please enter it in the following box and submit for confirmation.';
  return message;
}

function validateOTP() {
  var otpInput = document.getElementById('otp');
  var otp = otpInput.value.trim();

  if (otp === verificationNumber.toString()) {
    // Validation Successful
    document.getElementById('otpForm').style.display = 'none';
    document.getElementById('validationMessage').textContent = 'Validation Successful!';
    // Optional: Redirect to the Pixel6 home page
    // window.location.href = 'https://www.pixel6.com';
  } else {
    // Validation Failed
    attemptsLeft--;

    if (attemptsLeft === 0) {
      // No more attempts left
      document.getElementById('otpForm').style.display = 'none';
      document.getElementById('validationMessage').textContent = 'Validation Failed!';
      // Optional: Redirect to 404 page on Pixel6 website
      // window.location.href = 'https://www.pixel6.com/404';
    } else {
      // Retry with remaining attempts
      document.getElementById('otp').value = '';
      document.getElementById('attemptsLeft').textContent = attemptsLeft;
    }
  }
}

// Get form values from previous page (assuming passed as query parameters in the URL)
var params = new URLSearchParams(window.location.search);
var firstName = params.get('fullName');
var email = params.get('email');

// Generate confirmation message
var confirmationMessage = generateConfirmationMessage(firstName, email);
document.getElementById('confirmationMessage').textContent = confirmationMessage;
