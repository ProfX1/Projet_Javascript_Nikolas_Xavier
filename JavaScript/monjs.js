function loadJSON(callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', 'JSON/pass.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            callback(xhr.responseText);
        }
    };
    xhr.send(null);
}

function handleJSON(response) {
    var jsonData = JSON.parse(response);
    console.log(jsonData);

   
    jsonData.forEach(function (user) {
        console.log("Username:", user.username);
        console.log("Password:", user.password);
        console.log("Flagged:", user.flagged);
    });
}

loadJSON(handleJSON);
