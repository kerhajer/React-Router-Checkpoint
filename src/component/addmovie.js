import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Rating } from '@mui/material';

const Addmovie = ({AddNewmovie}) => {

    const [newmovie, setNemwovie] = useState({
        Title: "", Year: "", imdbID: "", Description: "",Trailer:"", Type: "", Poster: "", Rate: ""
    });


    const handleChange = (e) => { setNemwovie({...newmovie,[e.target.name]: e.target.value}) }
  
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button style={{ width: '150px' }} variant="bg-dark text-white" onClick={handleShow}>
                Add Movie
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add movie </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control onChange={handleChange }
                                name="Title"
                                type="text"
                                placeholder="Enter the title of the movie"
                                autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control onChange={handleChange }
                                name="Year"
                                type="text"
                                placeholder="Enter the year of the movie"
                                autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control onChange={handleChange }
                                name="imdbID"
                                type="text"
                                placeholder="Enter the  imdbID of the movie"
                                autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control onChange={handleChange }
                                name="Description"
                                type="text"
                                placeholder="Enter the description of the movie"
                                autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control onChange={handleChange }
                                name="Type"
                                type="text"
                                placeholder="Enter the description of the movie"
                                autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control onChange={handleChange }

                                name="Poster"
                                type="text"
                                placeholder="Enter the imageurl of the movie"
                                autoFocus />
                        </Form.Group>


                        <Rating  onChange={handleChange }
                            name="Rate"
                            defaultValue={0}
                            max={10} 
                        />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>{
                        AddNewmovie(newmovie)
                        handleClose()
                    }}>
                        Add movie
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default Addmovie;