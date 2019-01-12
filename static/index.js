var getURL = function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('newURL').href = "/goto/"  + this.responseText;
            document.getElementById('newURL').innerHTML = this.responseText;
        }
    }
    url = document.getElementById('url').value;
    xhttp.open("GET", "/get_url?url=" + url, true);
    xhttp.send();
};
