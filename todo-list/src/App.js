import './App.scss';
import Item from './components/Item/item'
import Menu from './components/Navbar/navbar'
import GoalForm from './components/GoalForm/goalform';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Container fluid>
      <Row>
        <Col>
        <GoalForm></GoalForm>
        </Col>
        <Col>
        <Item></Item>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
