function renderBooks() {
const booksWrapper = document.querySelector('.books');
booksWrapper.innerHTML = 
'<div class="book">
<figure class="book__img--wrapper">
    <img class="book__img" src="atomic habits.jpg" alt="">
</figure>
<div class="book__title">
    Atomic Habits
</div>
<div class="book__ratings">
 <i class="fa-solid fa-star"></i>
 <i class="fa-solid fa-star"></i>
 <i class="fa-solid fa-star"></i>
 <i class="fa-solid fa-star"></i>
 <i class="fa-solid fa-star-half"></i>
 </div>
 <div class="book__price">
 <span class="book__price--normal">$59.95</span> $14.95
 </div>
</div>'
}

setTimeout(() => {
renderBooks();
})