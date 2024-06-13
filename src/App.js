import Input from './components/Input';
import { Container, Content, Row, Header, overlay } from "./styles";
import Button from './components/Button';
import { useState } from 'react';



const App = () => {

  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setfirstNumber] = useState('0');
  const [operation, setOperation] = useState('');


  const handleOnClear = () => {
    setCurrentNumber('0')
    setfirstNumber('0')
    setOperation('')
  }

  const handleAddNumber = (num) => {
    if (num === 'bcksp') {
      setCurrentNumber(prev => prev.slice(0, -1)); // bcksp apaga o ultimo número
    } else {
      setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`);
    }
  }

  const handleSumNumbers = () => {

    if (firstNumber === '0') {
      setfirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')
    }

  }

  const handleMinusNumbers = () => {

    if (firstNumber === '0') {
      setfirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')
    }

  }

  const handleMultpleNumbers = () => {

    if (firstNumber === '0') {
      setfirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('x');
    } else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')
    }

  }

  const handleDivNumbers = () => {

    if (firstNumber === '0') {
      setfirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')
    }

  }

  const handleEquals = () => {

    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
          case '-':
          handleMinusNumbers();
          break;
          case 'x':
          handleMultpleNumbers();
          break;
          case '/':
            handleDivNumbers();
          break;
        default:
          break;
      }
    }

  }


  return (
    <Container>
      <Header>
        <h1>Calculadora feita com React</h1>
      </Header>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="AC" onClick={handleOnClear} />
          <Button label="()" onClick={() => handleAddNumber('')} />
          <Button label="%" onClick={() => handleAddNumber('')} />
          <Button label="/" onClick={handleDivNumbers} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="x" onClick={handleMultpleNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="-" onClick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="," onClick={() => handleAddNumber('.')} />
          <Button label="bcksp" onClick={() => handleAddNumber('bcksp')} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
