import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { Container, Button, Form } from "react-bootstrap";
import Navbar from "./Component/Navbar.jsx";
import ModalComponent from "./Component/Modal.jsx";

function App() {
  const [originalData, setOriginalData] = useState([]); 
  const[tempData, setTempData] = useState({});
  const [tableData, setTableData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (data) => {
    setShow(true);
    setTempData(data);
  };


  useEffect(() => {
    fetch("https://67723bf2ee76b92dd4918544.mockapi.io/userapi/UserData", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setOriginalData(data);
        setTableData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchInput(value);

    const filteredData = originalData.filter(
      (item) =>
        item.name.toLowerCase().includes(value) ||
        item.emailId.toLowerCase().includes(value) ||
        item.phoneNo.includes(value) ||
        item.qualification.toLowerCase().includes(value) ||
        item.location.toLowerCase().includes(value)
    );

    setTableData(filteredData);
  };

  return (
    <>
      <Navbar valu={searchInput} onCh={handleSearch} />
      <Container fluid className="">
        <Table bordered hover variant="dark">
          <thead>
            <tr className="fs-2 text-center">
              <th>Id</th>
              <th>Name</th>
              <th>Email ID</th>
              <th>Phone No</th>
              <th>Qualification</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {tableData.length > 0 ? (
              tableData.map((item, i) => (
                <tr key={item.id}>
                  <td className="p-4">{i + 1}</td>
                  <td className="p-4">{item.name}</td>
                  <td className="p-4">{item.emailId}</td>
                  <td className="p-4">{item.phoneNo}</td>
                  <td className="p-4">{item.qualification}</td>
                  <td className="p-4">{item.location}</td>
                  <td className="space">
                    <Button onClick={()=>handleShow(item)}>Edit</Button>
                    <Button variant="danger">Delete</Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
      <ModalComponent Close={handleClose} show={show} cellData={tempData} setCellData={tempData} updateData={setTempData} />
    </>
  );
}

export default App;
