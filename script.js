
const books = [
    {
        id: 1,
        title: "The Alchemist",
        category: "Fiction",
        price: 299,
        image: "https://covers.openlibrary.org/b/isbn/9780061122415-M.jpg"
    },
    {
        id: 2,
        title: "Atomic Habits",
        category: "Self-help",
        price: 399,
        image: "https://covers.openlibrary.org/b/isbn/9780735211292-M.jpg"
    },
    {
        id: 3,
        title: "Harry Potter",
        category: "Fantasy",
        price: 349,
        image: "https://covers.openlibrary.org/b/isbn/9780747532699-M.jpg"
    },
    {
        id: 4,
        title: "The Hobbit",
        category: "Fantasy",
        price: 425,
        image: "https://covers.openlibrary.org/b/isbn/9780547928227-M.jpg"
    },
    {
        id: 5,
        title: "Ikigai",
        category: "Self-help",
        price: 250,
        image: "https://covers.openlibrary.org/b/isbn/9780143130727-M.jpg"
    },
    {
        id: 6,
        title: "Pride and Prejudice",
        category: "Fiction",
        price: 199,
        image: "https://covers.openlibrary.org/b/isbn/9780141439518-M.jpg"
    }
];

let cart = [];

const bookContainer =
    document.getElementById("bookContainer");

const searchInput =
    document.getElementById("searchInput");

// Display books

function displayBooks(bookList) {

    bookContainer.innerHTML = "";

    bookList.forEach(book => {

        const card = document.createElement("div");

        card.className = "bookCard";

        card.innerHTML = `
            <img src="${book.image}" alt="${book.title}">

            <h3>
    <a href="alchemist.html">${book.title}</a>
            </h3>

            <p>${book.category}</p>

            <h3>₹${book.price}</h3>

            <button onclick="addToCart(${book.id})">
                Add to Cart
            </button>
        `;

        bookContainer.appendChild(card);

    });
}

// Search books

searchInput.addEventListener("input", function() {

    const searchText =
        searchInput.value.toLowerCase();

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchText)
    );

    displayBooks(filteredBooks);

});

// Filter by category

function filterBooks(category) {

    if (category === "All") {
        displayBooks(books);
    } else {

        const filteredBooks = books.filter(book =>
            book.category === category
        );

        displayBooks(filteredBooks);
    }

}

// Add book to cart

function addToCart(id) {

    const book = books.find(book =>
        book.id === id
    );

    cart.push(book);

    updateCart();

}

// Update cart

function updateCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartCount =
        document.getElementById("cartCount");

    const totalPrice =
        document.getElementById("totalPrice");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(book => {

        total += book.price;

        cartItems.innerHTML += `
            <div class="cartItem">
                <span>${book.title}</span>
                <span>₹${book.price}</span>
            </div>
        `;

    });

    cartCount.textContent = cart.length;

    totalPrice.textContent = total;

}

// Open cart

document.getElementById("cartButton")
    .addEventListener("click", function() {

        document.getElementById("cartBox")
            .style.display = "block";

    });

// Close cart

document.getElementById("closeCart")
    .addEventListener("click", function() {

        document.getElementById("cartBox")
            .style.display = "none";

    });

// Show all books when website loads

displayBooks(books);
