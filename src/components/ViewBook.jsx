import React, { Component } from "react";
import BookService from "../services/BookService";

class ViewBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      book: {},
    };
    this.formatDate = this.formatDate.bind(this);
    this.editBook = this.editBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
  }

  editBook(id) {
    this.props.history.push(`/books/edit/${id}`);
  }
  formatDate(string) {
    var options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(string).toLocaleDateString("en-US", options);
  }

  deleteBook(id) {
    BookService.deleteBook(id).then((res) => {
      this.props.history.push("/books");
    });
  }
  render() {
    return (
      <div>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center">Book details</h3>
          <div className="card-body">
            <div className="row">
              <table className="table table-striped table-bordered">
                <tbody>
                  <tr>
                    <td>Inv no.:</td>
                    <td>{this.state.book.inventoryNumber}</td>
                  </tr>
                  <tr>
                    <td>Title:</td>
                    <td>{this.state.book.title}</td>
                  </tr>
                  <tr>
                    <td>Author:</td>
                    <td>{this.state.book.authors}</td>
                  </tr>
                  <tr>
                    <td>Issue date:</td>
                    <td>{this.formatDate(this.state.book.issueDate)}</td>
                  </tr>
                  <tr>
                    <td>ISBN:</td>
                    <td>{this.state.book.isbn}</td>
                  </tr>
                  <tr>
                    <td>Publisher:</td>
                    <td>{this.state.book.publisher}</td>
                  </tr>
                  <tr>
                    <td>Genre:</td>
                    <td>{this.state.book.genre}</td>
                  </tr>
                </tbody>
              </table>
              <div>
                <button
                  onClick={() => this.editBook(this.state.book.id)}
                  className="btn btn-info"
                >
                  Edit
                </button>
                <button
                  onClick={() => this.deleteBook(this.state.book.id)}
                  className="btn btn-danger"
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewBook;
