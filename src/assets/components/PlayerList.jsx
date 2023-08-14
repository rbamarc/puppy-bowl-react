import { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Card, Col, Row, Container, InputGroup, FormControl } from "react-bootstrap";

export default function PlayerList() {
    const [players, setPlayers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const getPlayer = async () => {
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-pt-web-pt-e/players`);
        const data = await response.json();
        setPlayers(data.data.players);
    };

    useEffect(() => {
        getPlayer();
    }, []);

    const filteredPlayers = players.filter((player) =>
        player.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Search By Name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </InputGroup>
            <Row>
                {filteredPlayers.map((player) => (
                    <Col md={4} key={player.id}>
                        <LinkContainer to={`/pup/${player.id}`}>
                            <Card>
                                <Card.Img variant="top" src={player.imageUrl} />
                                <Card.Body>
                                    <Card.Title>{player.name}</Card.Title>
                                    <Card.Text>{player.breed}</Card.Text>
                                </Card.Body>
                            </Card>
                        </LinkContainer>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}