// display register form
var showRegister = function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('auth').innerHTML = this.responseText;
        }
    }
    xhttp.open("GET", "/get_snippet?snippet=register", true);
    xhttp.send();
};

// display login form
var showLogin = function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('auth').innerHTML = this.responseText;
        }
    }
    xhttp.open("GET", "/get_snippet?snippet=login", true);
    xhttp.send();
};
