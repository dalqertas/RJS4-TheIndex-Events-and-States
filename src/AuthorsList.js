import React, { Component } from "react";

// Components
import AuthorCard from "./AuthorCard";
import SearchBar from "./SearchBar";
class AuthorsList extends Component {
  state = {
    filtered: this.props.authors
  };

  authorCards = this.state.filtered.map(author => (
          <AuthorCard
            key={author.first_name + author.last_name}
            author={author}
            fnc={this.props.fnc}
          />
        ))
  filterAuthors = query => {
    let filtered;
    query.length !== 0
      ? (filtered = this.state.filtered.filter(author => {
          let name = (author.first_name + author.last_name).toUpperCase();
          return name.includes(query.toUpperCase());
        }))
      : (filtered = this.props.authors);
    console.log(filtered);
    this.setState({ filtered: filtered });
  };

  render() {
    return (
      <div className="authors">
        <SearchBar fnc={this.filterAuthors} />
        <h3>Authors</h3>
        <div className="row">
          {this.authorCards}
        </div>
      </div>
    );
  }
}

export default AuthorsList;
