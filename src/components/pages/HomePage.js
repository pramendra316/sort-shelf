import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../../BooksAPI.js'
import Bookshelf from '../Bookshelf.js'
import {getAll} from '../../BooksAPI.js'

class HomePage extends React.Component {
  state = {
    books: []
  }

  async componentDidMount() {
    try {
      const books = await getAll();
      this.setState({
        books
      });
    } catch(e) {
        console.log(e);
    }
  }

  updateBook = (book, shelf) => {
      BooksAPI.update(book, shelf)
      .then(_resp => {
          book.shelf = shelf;
          this.setState(state => ({
          books: state.books.filter(books => books.id !== book.id).concat([book])
      }));
      });
  };


  render () {
    return (
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>Sort Shelf</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf updateBook={this.updateBook} title="Currently Reading" books={this.state.books.filter((books) => books.shelf === "currentlyReading")}/>
                <Bookshelf updateBook={this.updateBook} title="Want To Read" books={this.state.books.filter((books) => books.shelf === "wantToRead")}/>
                <Bookshelf updateBook={this.updateBook} title="Read" books={this.state.books.filter((books) => books.shelf === "read")}/>
              </div>
            </div>
              <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default HomePage;
