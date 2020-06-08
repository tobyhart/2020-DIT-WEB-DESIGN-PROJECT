var loggedin = localStorage.getItem("loggedin");

if (loggedin == 1) {
    document.getElementById("nav-profile").src = "";
    document.getElementById("nav-profile").style.border = "none";
    document.getElementById('loginbutton').innerHTML = 'Log In';
    document.getElementById('navigationjs').style.transform = "translate(-2%, 100%)";
} 
if (loggedin == 2) {
    document.getElementById("nav-profile").src = "Images/user-icon.png";
    document.getElementById("nav-profile").style.border = "1px solid black";
    document.getElementById('loginbutton').innerHTML = '';
}