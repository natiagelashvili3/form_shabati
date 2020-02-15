var username = "natia"
var password = "123456"

var btn = document.getElementById('form-btn')
btn.addEventListener('click', function() {
    // უნდა ამოვიღოთ input-დან value-ები
    var form_username = document.getElementById("username").value
    var form_password = document.getElementById("password").value

    // შევამოწმოთ ემთხვევა თუარა
    if(username == form_username && password == form_password) {
        // ფორმა ქრება და გამოდის შეტყობინება
        document.getElementById('success-message').innerText = "You are logged in"
        document.getElementById('form').style.display = 'none'
    } else {
        // გამოდის ერორ შეყობინება
        document.getElementById('error-msg').innerText = "Invalid Username or password";
    }
});
