// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function StoryCard({ story }) {
  const { _id, storyname, description } = story;
  return (
    <Card>
      <Card.Header>{storyname}</Card.Header>
      <Card.Body>
        {/* <Card.Title>Special title treatment</Card.Title> */}
        <Card.Text>{description}</Card.Text>
        <Link to={`/story/${_id}`} variant="primary">
          Open Story
        </Link>
      </Card.Body>
    </Card>
  );
}

export default StoryCard;
