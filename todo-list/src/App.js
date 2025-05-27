import './App.scss';
import './App.scss';
import Item from './components/Item/item'
import Menu from './components/Navbar/navbar'
import goalform from './components/GoalForm/goalform';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Item></Item>

    </div>
  );
}

export default App;
