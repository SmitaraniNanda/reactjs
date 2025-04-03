import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "./App.css";
const SearchBar = () => {
  return (
    <div className="search-container">
      <InputGroup>
        <Form.Control type="text" placeholder="Search for gifts, flowers, cakes..." className="search-input" />
        <InputGroup.Text className="search-icon">
          <FaSearch />
        </InputGroup.Text>
      </InputGroup>
    </div>
  );
};

export default SearchBar;
