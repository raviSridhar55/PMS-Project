import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import ProgressBar from "react-bootstrap/ProgressBar";
import TaskContext from "../../../Context/task/taskContext";

function MyVerticallyCenteredModal(props) {
  const taskContext = useContext(TaskContext);
  const { addTask } = taskContext;

  const [taskname, setName] = useState("");
  const [taskdescription, setTaskDescription] = useState("");
  const [duedate, setDuedate] = useState("");
  const [status] = useState(0);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("createtask", taskname, taskdescription, duedate, status);
    addTask(taskname, taskdescription, duedate, status);
    props.onHide(true);
  };

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
          Create Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Task Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Task Name"
              value={taskname}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Task description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Task Description"
              value={taskdescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="date">
            <Form.Label>Completion Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Completion Date"
              value={duedate}
              onChange={(e) => setDuedate(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
function CreateTask() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Create Task
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
export default CreateTask;
