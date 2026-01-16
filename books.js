let books;


async function renderBooks(filter) {
const booksWrapper = document.querySelector(".books")

booksWrapper.classList += ' .books__loading'
 if (!books) {
books = await getBooks();
 }
booksWrapper.classList.remove('books__loading')

    if (filter === 'LOW_TO_HIGH') {
       books.sort((a, b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice));
    }
    else if (filter === 'HIGH_TO_LOW') {
       books.sort((a, b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice));
    }
    else if (filter === 'RATING') {
       books.sort((a, b) => b.rating - a.rating);
    }

const booksHtml = books
.map((book) => {
  return  `<div class="book">
<figure class="book__img--wrapper">
    <img class="book__img" src="${book.url}" alt=""/>
</figure>
<div class="book__title">
    ${book.title}
</div>
<div class="book__ratings">
    ${ratingsHtml(book.rating)}
    </div>
    <div class="book__price">
    ${priceHtml(book.originalPrice, book.salePrice)}
    </div>
    </div>`;
})

.join("");

booksWrapper.innerHTML = booksHtml;
}

function priceHtml(originalPrice, salePrice) {
    if (!salePrice) {
        return `$${originalPrice.toFixed(2)}`;
    }
    return `<span class="book__price--normal">$${originalPrice.toFixed(2)}</span> $${salePrice.toFixed(2)}`;
}


function ratingsHtml(rating) {
    let ratingHtml = '';

    for (let i = 0; i < Math.floor(rating); i++) {
        ratingHtml += '<i class="fa-solid fa-star"></i>';
    }

    if (!Number.isInteger(rating)) {
        ratingHtml += '<i class="fa-solid fa-star-half"></i>';
    }

    return ratingHtml;
}

function filterBooks(event) {
    if (event.target.value === 'LOW_TO_HIGH');
}


setTimeout(() => {
renderBooks();
});

function getBooks() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
    {
        id: 1,
        title: "Cracking the Coding Interview",
        url: "crack the coding interview.png",
        originalPrice: 59.95,
        salePrice: 14.95,
        rating: 4.5,
    },
    {
        id: 2,
        title: "Atomic Habits",
        url: "atomic habits.jpg",
        originalPrice: 59.95,
        salePrice: 13.95,
        rating: 4.5,
    },
    {
        id: 3,
        title: "Can't Hurt Me",
        url: "david goggins.jpeg",
        originalPrice: 59.95,
        salePrice: 15.00,
        rating: 4.5,
    },
    {
        id: 4,
        title: "Deep Work",
        url: "deep work.jpeg",
        originalPrice: 59.95,
        salePrice: 12.00,
        rating: 4.5,
    },
    {
        id: 5,
        title: "The 10X Rule",
        url: "book-1.jpeg",
        originalPrice: 59.95,
        salePrice: 13.00,
        rating: 4.5,
    },
    {
        id: 6,
        title: "Be Obsessed or Be Average",
        url: "book-2.jpeg",
        originalPrice: 59.95,
        salePrice: 11.95,
        rating: 4.5,
    },
    {
        id: 7,
        title: "Rich Dad Poor Dad",
        url: "book-3.jpeg",
        originalPrice: 59.95,
        salePrice: 10.95,
        rating: 4.5,
    },
    {
        id: 8,
        title: "Cashflow Quadrant",
        url: "book-4.jpeg",
        originalPrice: 59.95,
        salePrice: 17.95,
        rating: 4.5,
    },
    {
        id: 9,
        title: "Psychology of Money",
        url: "book-5.jpeg",
        originalPrice: 59.95,
        salePrice: 16.95,
        rating: 4.5,
    },
    {
        id: 10,
        title: "The 5 Seconds Rule",
        url: "book-6.jpeg",
        originalPrice: 59.95,
        salePrice: 16.00,
        rating: 4.5,
    },
    {
        id: 11,
        title: "Your Next Five Moves",
        url: "book-7.jpg",
        originalPrice: 59.95,
        salePrice: 21.99,
        rating: 4.5,
    },
    {
        id: 12,
        title: "Mastery",
        url: "book-8.jpeg",
        originalPrice: 59.95,
        salePrice: 20.00,
        rating: 4.5,
        }
    ])
    }, 1000)
})
}