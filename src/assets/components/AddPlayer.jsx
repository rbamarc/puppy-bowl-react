import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { Form, Button, Container, Row, Col } from "react-bootstrap"

export default function AddPlayer() {
    const [name, setName] = useState('')
    const [breed, setBreed] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [status, setStatus] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newPlayer = { name, breed, imageUrl, status }
        
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-pt-web-pt-e/players`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPlayer),
        })

        if (response.ok) {
            navigate('/puppy-bowl-react')
        }
        console.log(newPlayer)
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="10">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Name:</Form.Label>
                            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Group><Form.Group>
                            <Form.Label>Breed:</Form.Label>
                            <Form.Control type="text" value={breed} onChange={(e) => setBreed(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Image:</Form.Label>
                            <Form.Control type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Status:</Form.Label>
                            <Form.Control type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
                        </Form.Group>
                        
                        <Button variant="success" type="submit">Add Player</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}