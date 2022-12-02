import React, { useState, useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import storyContext from "../../../Context/story/storyContext.js";
import AuthContext from "../../../Context/auth/authContext.js";

function MyVerticallyCenteredModal(props) {
  const [story, setStory] = useState({
    user: "",
    storyname: "",
    description: "",
    duedate: "",
    status: "Not Completed",
  });

  const options = [];

  const StoryContext = useContext(storyContext);

  const { addStory } = StoryContext;

  // console.log(props.users);

  props.users &&
    props.users.map((user) => {
      if (!user.isPM) {
        options.push({ value: user._id, label: user.name });
      }
    });

  // console.log(options);

  const handleChange = (e) => {
    let newStory = { ...story };
    newStory = { ...story, [e.target.id]: e.target.value };
    // console.log(e);
    setStory(newStory);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(story);
    addStory(story);
  };
  //   console.log(props.task);
  //   const { taskname, taskdescription, duedate, status } = props.task;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      keyboard="true"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create Story
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="user">
            <Form.Label>User</Form.Label>
            <Form.Control as="select" onChange={(e) => handleChange(e)}>
              <option key="blankChoice" hidden value>
                Select User{" "}
              </option>
              {options.map((option) => {
                return (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="storyname">
            <Form.Label>Story Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Story Name"
              onChange={(e) => handleChange(e)}
              value={story.storyname}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Story description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Story Description"
              onChange={(e) => handleChange(e)}
              value={story.description}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="duedate">
            <Form.Label>Completion Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Completion Date"
              onChange={(e) => handleChange(e)}
              value={story.duedate}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </Button>
        </Form>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}
function CreateStory() {
  const [modalShow, setModalShow] = useState(false);

  const authContext = useContext(AuthContext);
  const { users, loadAllUsers } = authContext;

  useEffect(() => {
    loadAllUsers();
  }, []);

  console.log(users);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Create Story
      </Button>
      <MyVerticallyCenteredModal
        users={users}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
export default CreateStory;
