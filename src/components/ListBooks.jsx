import React, { Component } from "react";
import BookService from "../services/BookService";

class ListBooks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
    };

    this.viewBook = this.viewBook.bind(this);
    this.concatAuthorNames = this.concatAuthorNames.bind(this);
  }

  componentDidMount() {
    BookService.getBooks().then((res) => {
      this.setState({ books: res.data });
      console.log(JSON.stringify(res));
    });
  }

  viewBook(id) {
    this.props.history.push(`/books/view/${id}`);
  }

  concatAuthorNames(authors) {
    return authors
      .map((author) => `${author.firstName + " " + author.lastName}`)
      .join(",");
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Book list</h2>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Inv No.</th>
                <th>Title</th>
                <th>Author</th>
                <th>Publisher</th>
                <th>Genre</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {this.state.books.map((book) => (
                <tr key={book.id}>
                  <td>{book.inventoryNumber}</td>
                  <td>{book.title}</td>
                  <td>{this.concatAuthorNames(book.authors)}</td>
                  <td>{book.publisher}</td>
                  <td>{book.genre}</td>
                  <td>
                    <button
                      onClick={() => this.viewBook(book.id)}
                      className="btn btn-info"
                      style={{ marginLeft: "10px" }}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListBooks;
