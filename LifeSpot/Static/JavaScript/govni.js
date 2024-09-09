let info = new Map();
function verification() {
    
    let userAgent = window.navigator.userAgent;
    info.set("userAgent", userAgent);
   
    info.set("time", new Date());
    
}
let subscr = function () {
    alert("Подпишитесь на нас!!!! ");
}
function chekAge() {

    let age = prompt("Введите ваш возраст");
   
    if (age < 18) {
        alert("Ваш возраст меньше 18 ");
        window.location.href = "http://www.google.com";
    }
    else {
        alert("Поздравляю вам доступен доступ к сайту");
        info.set("age", age);
    }
}

let session = function sessionLog() {
    for (let result of info) {
        console.log(result)
    }
}

let valueInput = function () { return document.querySelector('input').value.toLowerCase(); }
function filterContent() {
     

    let elements = document.getElementsByClassName('video-container');
    for (let i = 0; i < elements.length; i++) {
        let container = elements[i];
        let videoName = container.getElementsByTagName('h3')[0].innerText.toLowerCase();
        if (videoName.includes(valueInput())) {
            elements[i].style.display = 'inline-block'
        }
        else if (valueInput() === '') elements[i].style.display = 'inline-block'
        else elements[i].style.display = 'none';
    }
}

