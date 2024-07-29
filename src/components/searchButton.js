import React from "react";
import { Button, Row } from "react-bootstrap";

function SearchButton({ onFilter }) {
  const allLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return (
    <Row className="flex-nowrap">
      {allLetters.map((letter, index) => (
        <Button 
          type="button" 
          style={{width:'43px'}}
          className="btn btn-primary mx-1" 
          key={index}
          onClick={() => onFilter(letter)}
        >
          {letter.toUpperCase()}
        </Button>
      ))}
    </Row>
  );
}

export default SearchButton;
