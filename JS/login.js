const loginBtn = document.getElementById("loginBtn");

function login() {
  Swal.fire({
    title: "Login Form",
    html: `
      <input type="text" id="username" class="swal2-input" placeholder="Username">
      <input type="password" id="password" class="swal2-input" placeholder="Password">
    `,
    confirmButtonText: "Login",
    focusConfirm: false,
    showLoaderOnConfirm: true,
    preConfirm: () => {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      if (!username || !password) {
        Swal.showValidationMessage(`Please enter both username and password`);
      }
      return { username: username, password: password };
    },
  })
    .then((result) => {
      if (result.isConfirmed) {
        const username = result.value.username;
        const password = result.value.password;
        if (username === "admin" && password === "admin") {
          localStorage.setItem("username", username);
          localStorage.setItem("password", password);
          window.location.href = "HTML/Teacher-Login.html";
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid username or password!",
          }).then(() => {
            login();
          });
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

loginBtn.addEventListener("click", login);
