//get the button

const getAllBookDetails = () => {
    fetch('http://localhost:3000/books/all').then((response) => response.text())
    .then(html => {
        document.getElementById('books-data').innerHTML = html;
    })
} 

const getBookById = () => {
    let bookId = document.getElementById('book-id').value
    fetch(`http://localhost:3000/books/${bookId}`).then(response => response.json())
    .then((data) => {
        let bookData = JSON.stringify(data.data[0])
        document.getElementById('id-book-data').innerHTML = bookData;
    })
    
}

const getFeaturedBooks = () => {
    let featuredBooksEl = document.getElementById('books-data')
    fetch(`http://localhost:3000/books/featured`).then(response => response.text())
    .then((html) => {
        featuredBooksEl.innerHTML = html;
    }).catch(console.error)
}