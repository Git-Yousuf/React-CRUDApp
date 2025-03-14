import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

function ModalComponent(props) {
  const { name, emailId, phoneNo, qualification, location } = props.cellData;

  return (
    <>
      <Modal show={props.show} onHide={props.Close}>
        <Modal.Header closeButton>
          <Modal.Title>Edit the Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="John"
                autoFocus
                name="name"
                defaultValue={name}
                onChange={(event)=>props.updateData({...props.cellData, name: event.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                name="email"
                defaultValue={emailId}
                onChange={(event)=>props.updateData({...props.cellData, emailId: event.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="xxx-xxx-xxxx"
                autoFocus
                name="phone"
                defaultValue={phoneNo}
                onChange={(event)=>props.updateData({...props.cellData, phoneNo: event.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Qualification</Form.Label>
              <Form.Control
                type="text"
                placeholder="MTech"
                autoFocus
                name="qualification"
                defaultValue={qualification}
                onChange={(event)=>props.updateData({...props.cellData, qualification: event.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Saligramam"
                autoFocus
                name="location"
                defaultValue={location}
                onChange={(event)=>props.updateData({...props.cellData, location: event.target.value})}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.Close}>
            Close
          </Button>
          <Button variant="primary" onClick={props.Close}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComponent;
