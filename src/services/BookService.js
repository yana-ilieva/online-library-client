import axios from "axios";

const BOOKS_BASE_URL = "http://localhost:8080/books";

class BookService {
  getBooks() {
    return axios.get(BOOKS_BASE_URL);
  }

  saveBook(book) {
    return axios.post(BOOKS_BASE_URL, book);
  }

  getBookById(id) {
    return axios.get(BOOKS_BASE_URL + "/" + id);
  }

  getBookByTitle(title) {
    return axios.get(BOOKS_BASE_URL + "/title/" + title);
  }

  updateBook(book, id) {
    return axios.put(BOOKS_BASE_URL + "/" + id, book);
  }

  deleteBook(id) {
    return axios.delete(BOOKS_BASE_URL + "/" + id);
  }
}

export default new BookService();
