var like_button = document.querySelector('.like_btn');
var number_of_likes = document.querySelector('.number_of_likes');
like_button.addEventListener('click', () => {
    console.log(Number(number_of_likes.innerText)+1);
    number_of_likes.innerText = Number(number_of_likes.innerText) + 1;
})