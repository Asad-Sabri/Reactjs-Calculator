import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Accordions from "./accordion";
import ContactForm from "./contactForm";
import SearchButton from "./searchButton";

function Home() {
  const [accordionItems, setAccordionItems] = useState([]);
  const [filter, setFilter] = useState("");

  const handleFormSubmit = (data) => { setAccordionItems([...accordionItems, data]);};

  
const defaultFilters = {
    name:'',
};

    const [filters, setFilters] = useState(defaultFilters);
    // const [filters, setData] = useState(defaultFilters);

    const handleFilter = (letter) => {
        setFilter(letter);
      };

      
  
      const filteredItems = filter 
      ? accordionItems.filter(item => item.name.toLowerCase().startsWith(filter)) 
      : accordionItems; 
      
  return (
    <Container>
      <ContactForm onSubmit={handleFormSubmit} />
      <SearchButton onFilter={handleFilter} />
      <Accordions items={filteredItems} />
    </Container>
  );
}

export default Home;
