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
        
        
    })
    
    ;
}

loadJSON(handleJSON);

function enter(username, password){

    var userName = document.getElementById("username");
    var Password = document.getElementById("password");
    window.alert(userName.value + " " + Password.value);
    // window.alert(Password.value);
};


var cta = document.querySelector(".cta");
var check = 0;

cta.addEventListener('click', function(e){
    var text = e.target.nextElementSibling;
    var loginText = e.target.parentElement;
    text.classList.toggle('show-hide');
    loginText.classList.toggle('expand');
    if(check == 0)
    {
        cta.innerHTML = "<i class=\"fas fa-chevron-up\"></i>";
        check++;
    }
    else
    {
        cta.innerHTML = "<i class=\"fas fa-chevron-down\"></i>";
        check = 0;
    }
})