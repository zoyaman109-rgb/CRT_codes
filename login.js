function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("errorMsg");

    errorMsg.classList.remove("show");
    errorMsg.innerText = "";

    if (!email || !password) {
        errorMsg.innerText = "Please fill all fields.";
        errorMsg.classList.add("show");
        return;
    }

    alert("Login successful!");
}