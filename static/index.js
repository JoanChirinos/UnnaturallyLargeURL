var getURL = function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('newURL').classList.remove('display-4');
            document.getElementById('newURL').classList.add('s');
            document.getElementById('mega').classList.remove('h');
            document.getElementById('newURL').href = "/goto/" + this.responseText;
            document.getElementById('newURL').innerHTML = this.responseText;
        }
    }
    url = document.getElementById('url').value;
    xhttp.open("GET", "/get_url?url=" + url, true);
    xhttp.send();
};

var checkURL = function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            getURL();
        } else {
            document.getElementById('newURL').innerHTML = "this ain't it chief";
        }
    }
    url = document.getElementById('url').value;
    xhttp.open("GET", url, true);
    xhttp.send();
};

var superHuge = function () {
    document.getElementById('newURL').classList.remove('s');
    document.getElementById('newURL').classList.add('display-4');
    document.getElementById('mega').classList.add('h');
};
