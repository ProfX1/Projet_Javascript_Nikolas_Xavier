// key ="gattaca"

// function vigenereCipher(text, key, mode) {
//     const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     let result = '';

//     // Normalize key
//     key = key.toUpperCase().replace(/[^A-Z]/g, '');

//     for (let i = 0, j = 0; i < text.length; i++) {
//         const char = text.charAt(i).toUpperCase();
//         let shift = alphabet.indexOf(key.charAt(j % key.length));

//         if (alphabet.indexOf(char) !== -1) {
//             if (mode === 'encrypt') {
//                 result += alphabet.charAt((alphabet.indexOf(char) + shift) % alphabet.length);
//             } else if (mode === 'decrypt') {
//                 result += alphabet.charAt((alphabet.indexOf(char) - shift + alphabet.length) % alphabet.length);
//             }
//             j++;
//         } else {
//             result += char;
//         }
//     }

//     return result;
// }
// // Example usage:
// // const plaintext = 'HELLO';
// // const key = 'gattaca';
// // const ciphertext = vigenereCipher(plaintext, key, 'encrypt');
// // console.log('Encrypted:', ciphertext);

// // const decryptedText = vigenereCipher(ciphertext, key, 'decrypt');
// // console.log('Decrypted:', decryptedText);

// function loadJSON(callback) {
//     var xhr = new XMLHttpRequest();
//     xhr.overrideMimeType("application/json");
//     xhr.open('GET', '../../JSON/user.json', true);
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             callback(xhr.responseText);
//         }
//     };
//     xhr.send(null);
// }

// function handleJSON(response) {
//     var jsonData = JSON.parse(response);
//     console.log(jsonData);

   
//     jsonData.forEach(function (user) {
//         console.log("Username:", user.username);
//         console.log("Password:", user.password);
//         console.log("Flagged:", user.flagged);
        
        
//     })
    
//     ;
// }

// loadJSON(handleJSON);

// // function enter(username, password){

// //     var userName = document.getElementById("username");
// //     var Password = document.getElementById("password");
//     // Document.write(username)
// //     window.alert(userName.value + " " + Password.value);
// //     // window.alert(Password.value);
// // };

// function logonusername() {

//     var userName = document.getElementById("txt-input")
//     // var Password = document.getElementById("pwd").value;
//     // var cryptedPassword = vigenereCipher(Password, key, 'encrypt')
//     // window.alert(document.getElementById("txt-input").value)
//     // console.log(userName.value)
//     // if (cryptedPassword == 'Hello World') {
//     //     document.write("hello")
//     // }
    
// }

// function logonpassword() {
//     var password = document.getElementById('pwd').value;
//     var cryptedPassword = vigenereCipher(password, key, 'encrypt')
    

// }

// function new_user() {
//     var userName = document.getElementById("username").value;
//     var Password = document.getElementById("password").value;

 
//     var newUser = {
//         "username": userName,
//         "password": Password,
//         "flagged": false
//     };

    
//     jsonData.push(newUser);

//     console.log(jsonData);

  
// }



// Show/hide password onClick of button using Javascript only

// https://stackoverflow.com/questions/31224651/show-hide-password-onclick-of-button-using-javascript-only

function show() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'text');
}

function hide() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'password');
}

var pwShown = 0;

document.getElementById("eye").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        show();
    } else {
        pwShown = 0;
        hide();
    }
}, false);





// event on click of button DO NOT PRESS

function haha(){

    var audio = new Audio();

    audio.src = '../../static/Media/ButtonAudio.mp3';
    getIPAddress()
    audio.play();
    
    // window.alert('Bad')
}

function getIPAddress() {
    fetch('https://api.ipify.org/?format=json')
    .then(response => response.json())
    .then(data => {
      window.alert("since you have pressed the button we have grabbed you ip address in order to be able to hack you"+data.ip);
    })
    .catch(error => {
      console.error('Error fetching IP address:', error);
    //   document.getElementById('ip-address').innerText = 'Error fetching IP address';
    });
  }

  // Call the function when the page loads
//   window.onload = getIPAddress;