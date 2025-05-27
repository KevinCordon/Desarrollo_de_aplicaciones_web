
import React from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { removeGoal } from "../../redux/actions/goalActions";
import './item.scss';

function Item() {
  const goals = useSelector((state) => state.goals);
  const dispatch = useDispatch();

  return (
    <div className="goal-list">
      {goals.length === 0 ? (
        <p>No goals added yet.</p>
      ) : (
        goals.map((goal, index) => (
          <Card style={{ width: '18rem' }} key={index} className="mb-3 goal-card">
            <Card.Body>
              <Card.Title><strong>Name</strong><br />{goal.name}</Card.Title>
              <Card.Text>
                <strong>Description</strong><br />{goal.description}
              </Card.Text>
              <Card.Text>
                <strong>Due Date:</strong> {goal.dueDate}
              </Card.Text>
              <Button
                variant="danger"
                className="w-100"
                onClick={() => dispatch(removeGoal(index))}
              >
                Remove
              </Button>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
}

export default Item;
=======
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;

