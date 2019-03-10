import React, { Component } from "react";
import { NavLink  } from "react-router-dom";
class BookRow extends Component {
  render() {
    const book = this.props.book;
    return (
      <tr>
        <td>{book.title}</td>
        <td>
          {book.authors.map(author => (
            <div key={author.id}><NavLink to={"/authors/"+author.id}>{author.name}</NavLink></div>
          ))}
        </td>
        <td>
          <NavLink to={"/books/"+book.color}> <button className="btn" style={{ backgroundColor: book.color }} /></NavLink>
        </td>
      </tr>
    );
  }
}

export default BookRow;
