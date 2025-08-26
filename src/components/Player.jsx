// Importing required components from React-Bootstrap
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

// Functional component Player
// Accepts props with default values for fallback
const Player = ({
    name = "Player name",          // Default name
    team = "Player team",          // Default team
    nationality = "Nationality",   // Default nationality
    jerseyNumber = 10,             // Default jersey number
    age = 37,                      // Default age
    imageUrl = "https://img.a.transfermarkt.technology/portrait/big/28003-1740766555.jpg?lm=1" // Default image
}) => {
  return (
    <Card style={{ width: '18rem' }}>
      {/* Player image */}
      <Card.Img variant="top" src={imageUrl} />

      {/* Card Body with name and nationality */}
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{nationality}</Card.Text>
      </Card.Body>

      {/* List of additional player details */}
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{team}</ListGroup.Item>
        <ListGroup.Item>{jerseyNumber}</ListGroup.Item>
        <ListGroup.Item>{age}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default Player;
