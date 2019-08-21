let myButton = document.querySelector('button');
let myHeading2 = document.querySelector('h2');

function setUserName() {
    let myName = prompt("Hi, I am Audrey. What's your name?");
    localStorage.setItem('nom', myName);
    myHeading2.textContent = "Welcome to Audrey's kitchen, " + myName + "!";
};

if (!localStorage.getItem('nom')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('nom');
    myHeading2.textContent = "Welcome to Audrey's kitchen, " + storedName + "!";
};

myButton.addEventListener('click', function() {
    setUserName();
});

let myImg = document.querySelector('img');
myImg.addEventListener('click', function() {
    let mySrc = myImg.getAttribute('src');
    if (mySrc === "Logo-rolling-out-dough.png"){
        myImg.setAttribute('src', "Logo-rolling-out-dough-2.png");
        alert("You hungry little thing !");
    } else {
      myImg.setAttribute('src', "Logo-rolling-out-dough.png");
      alert("Infinite satisfaction on this website ! ;)")
    }
});

document.querySelector('a').addEventListener('click', function() {
    alert("Already quitting? Goodbye mate, was a pleasure :)");
});