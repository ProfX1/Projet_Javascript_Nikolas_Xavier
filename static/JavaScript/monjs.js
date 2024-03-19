key ="gattaca"
function vigenereCipher(text, key, mode) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';

    // Normalize key
    key = key.toUpperCase().replace(/[^A-Z]/g, '');

    for (let i = 0, j = 0; i < text.length; i++) {
        const char = text.charAt(i).toUpperCase();
        let shift = alphabet.indexOf(key.charAt(j % key.length));

        if (alphabet.indexOf(char) !== -1) {
            if (mode === 'encrypt') {
                result += alphabet.charAt((alphabet.indexOf(char) + shift) % alphabet.length);
            } else if (mode === 'decrypt') {
                result += alphabet.charAt((alphabet.indexOf(char) - shift + alphabet.length) % alphabet.length);
            }
            j++;
        } else {
            result += char;
        }
    }

    return result;
}
// Example usage:
// const plaintext = 'HELLO';
// const key = 'gattaca';
// const ciphertext = vigenereCipher(plaintext, key, 'encrypt');
// console.log('Encrypted:', ciphertext);

// const decryptedText = vigenereCipher(ciphertext, key, 'decrypt');
// console.log('Decrypted:', decryptedText);

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

// function enter(username, password){

//     var userName = document.getElementById("username");
//     var Password = document.getElementById("password");
//     window.alert(userName.value + " " + Password.value);
//     // window.alert(Password.value);
// };

function enter(username, password) {
    var userName = document.getElementById("username").value;
    var Password = document.getElementById("password").value;
    var cryptedPassword = vigenereCipher(Password, key, 'encrypt')

    if (cryptedPassword == 'Hello World') {
        document.write("hello")
    }
  
    var newUser = {
        "username": userName,
        "password": Password,
        "flagged": false
    };


    jsonData.push(newUser);

    console.log(jsonData);

    
}

function new_user() {
    var userName = document.getElementById("username").value;
    var Password = document.getElementById("password").value;

 
    var newUser = {
        "username": userName,
        "password": Password,
        "flagged": false
    };

    
    jsonData.push(newUser);

    console.log(jsonData);

  
}

