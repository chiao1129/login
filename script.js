// script.js
function toggleRecaptchaInfo() {
    var recaptchaPolicy = document.querySelector('.recaptcha-policy');
    var furtherUnderstanding = document.querySelector('.further-understanding');

    if (recaptchaPolicy.style.display === 'none') {
        recaptchaPolicy.style.display = 'block';
        furtherUnderstanding.style.display = 'none';
    } else {
        recaptchaPolicy.style.display = 'none';
        furtherUnderstanding.style.display = 'inline'; // 或 'inline-block'，根據需要
    }
}
