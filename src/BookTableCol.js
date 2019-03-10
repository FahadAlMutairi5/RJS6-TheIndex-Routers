import React, { Component } from "react";

import BookRow from "./BookRow";
import SearchBar from "./SearchBar";
class BookTable extends Component {
  state = {
    filterbooks: this.props.books.filter(book => book.color === this.props.match.params.booksCol)
  };
  filterbooks = query => {
    query = query.toLowerCase();
    let filteredbooks = this.props.books.filter(books =>
      (`${books.title}`.toLowerCase().includes(query) && books.color === this.props.match.params.booksCol)
    );
    this.setState({ filterbooks: filteredbooks });
  };
  render() {
    const bookRows = this.state.filterbooks.map(book => (
      <BookRow key={book.id} book={book} />
    ));
    return (
      <div>
      <h3>Books</h3>
      <SearchBar onChange={this.filterbooks} />
      <table className="mt-3 table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Authors</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>{bookRows}</tbody>
      </table>
      </div>
    );
  }
}

export default BookTable;
