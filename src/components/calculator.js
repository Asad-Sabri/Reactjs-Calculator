import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, FormControl } from 'react-bootstrap';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input)); // Note: Using eval() can be dangerous in a real application
    } catch (error) {
      setResult('Error');
    }
  };

  const handleKeyDown = (event) => {
    const { key } = event;

    if ((key >= '0' && key <= '9') || key === '.') {
      setInput(input + key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
      setInput(input + key);
    } else if (key === 'Enter') {
      handleCalculate();
    } else if (key === 'Backspace') {
      setInput(input.slice(0, -1));
    } else if (key === 'Escape') {
      handleClear();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [input]);

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2 className="text-center mb-4">Calculator</h2>
          <Row>
            <Col lg={6}>
              <FormControl
                type="text"
                readOnly
                value={input}
                className="mb-3 text-right"
                placeholder="0"
              />
            </Col>
            <Col lg={6}>
              <FormControl
                type="text"
                readOnly
                className="mb-3 text-right"
                placeholder="Result"
                value={result}
              />
            </Col>
          </Row>
          <div className="d-grid gap-2 mb-2">
            <Button variant="danger" onClick={handleClear}>Clear</Button>
          </div>
          <Row className="my-4">
            <Col lg={3}><Button variant="secondary" onClick={() => handleClick('1')}>1</Button></Col>
            <Col lg={3}><Button variant="secondary" onClick={() => handleClick('2')}>2</Button></Col>
            <Col lg={3}><Button variant="secondary" onClick={() => handleClick('3')}>3</Button></Col>
            <Col lg={3}><Button variant="success" onClick={() => handleClick('+')}>+</Button></Col>
          </Row>
          <Row className="my-4">
            <Col lg={3}><Button variant="secondary" onClick={() => handleClick('4')}>4</Button></Col>
            <Col lg={3}><Button variant="secondary" onClick={() => handleClick('5')}>5</Button></Col>
            <Col lg={3}><Button variant="secondary" onClick={() => handleClick('6')}>6</Button></Col>
            <Col lg={3}><Button variant="success" onClick={() => handleClick('-')}>-</Button></Col>
          </Row>
          <Row className="my-4">
            <Col lg={3}><Button variant="secondary" onClick={() => handleClick('7')}>7</Button></Col>
            <Col lg={3}><Button variant="secondary" onClick={() => handleClick('8')}>8</Button></Col>
            <Col lg={3}><Button variant="secondary" onClick={() => handleClick('9')}>9</Button></Col>
            <Col lg={3}><Button variant="success" onClick={() => handleClick('*')}>*</Button></Col>
          </Row>
          <Row className="my-4">
            <Col lg={3}><Button variant="secondary" onClick={() => handleClick('0')}>0</Button></Col>
            <Col lg={3}><Button variant="secondary" onClick={() => handleClick('.')}>.</Button></Col>
            <Col lg={3}><Button variant="success" onClick={handleCalculate}>=</Button></Col>
            <Col lg={3}><Button variant="success" onClick={() => handleClick('/')}>/</Button></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Calculator;
