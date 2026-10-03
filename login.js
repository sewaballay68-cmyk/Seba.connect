const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    message.textContent = "Logging in...";
    message.style.color = "black";

    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    });

    if (error) {
        message.textContent = error.message;
        message.style.color = "red";
        return;
    }

    message.textContent = "Login successful!";
    message.style.color = "green";

    setTimeout(function() {
        window.location.href = "home.html";
    }, 1000);
});