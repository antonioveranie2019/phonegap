function check() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (username === "Roseindia" && password === "Roseindia") {
    alert("SUCCESS");
    sessionStorage.setItem("firstname", "Roseindia");
    window.location = "entry2.html";
  } else {
    alert("Error Password or Username");
  }
}
