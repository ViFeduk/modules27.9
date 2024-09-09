function clickButton() {
    let review = {};
    review['userName'] = prompt("Введите ваше имя");

    review['comment'] = prompt("Введите отзыв");
    review['date'] = new Date();
    writeReview(review)
    
}

let  writeReview = review => {
    document.getElementsByClassName('reviewText')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review['userName']}</b>  ${review['date']}</i></p>` +
        `<p>${review['comment']}</p>` +
        '</div>';
}