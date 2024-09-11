
function verification(session, checker) {
    
    
    if (window.sessionStorage.getItem("userAgent") == null) {
        window.sessionStorage.setItem("userAgent", window.navigator.userAgent);
    }
    if (window.sessionStorage.getItem("time") == null) {
        window.sessionStorage.setItem("time", new Date());
    }
    if (window.sessionStorage.getItem("age") == null) {
        let input = prompt("Пожалуйста, введите ваш возраст?");
        window.sessionStorage.setItem("age", input);
        checker(true)
    }
    else {
        checker(false);
    }
   
    session();
    
}
let subscr = function () {
    alert("Подпишитесь на нас!!!! ");
}
function checker(firstVisit){
    if (window.sessionStorage.getItem("age") >= 18) {
        if (firstVisit) {
            alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
        }
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
}

let session = function sessionLog() {
    console.log("Данные клиента : " + window.sessionStorage.getItem("userAgent"));
    console.log("Возраст пользователя : " + window.sessionStorage.getItem("age"));
    console.log("Время : " + window.sessionStorage.getItem("time"));
    
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

