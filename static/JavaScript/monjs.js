
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
      window.alert("since you have pressed the button we have grabbed your ip address in order to be able to hack you "+data.ip);
    })
    .catch(error => {
      console.error('Error fetching IP address:', error);
    //   document.getElementById('ip-address').innerText = 'Error fetching IP address';
    });
  }

  // Call the function when the page loads
//   window.onload = getIPAddress;