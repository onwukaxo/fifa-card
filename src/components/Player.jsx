import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const Player = ({
    name = "Player name",
    team = "Player team",
    nationality = "Nationality",
    jerseyNumber = 10,
    age = 37,
    imageUrl = "https://img.a.transfermarkt.technology/portrait/big/28003-1740766555.jpg?lm=1"
    }) => {

  return (
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{nationality}</Card.Text>
      </Card.Body>

      <ListGroup className="list-group-flush">
        <ListGroup.Item>{team}</ListGroup.Item>
        <ListGroup.Item>{jerseyNumber}</ListGroup.Item>
        <ListGroup.Item>{age}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default Player;