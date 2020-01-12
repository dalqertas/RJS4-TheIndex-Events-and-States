import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class SearchBar extends Component {

   handleChange = event => {
    console.log(event.target.value);
    this.props.fnc(event.target.value);
  }
render (){
    return (
      <div className="form-group col-lg-6 col-12 mx-auto">
        <div className="input-group my-3">
          <input
                    className="form-control"
                    name="search"
                    type="text"
                    onChange={this.handleChange}
                  />
          <div className="input-group-append">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        </div>
      </div>
    );
}
}

export default SearchBar;