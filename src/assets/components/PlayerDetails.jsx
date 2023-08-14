import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DeletePlayer from './DeletePlayer'
import { Card, Container } from 'react-bootstrap'

export default function PlayerDetails() {
    const [player, setPlayer] = useState(null) 
    const { id } = useParams()
    
    
    useEffect(() => {
        async function fetchPlayer() {
            const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-pt-web-pt-e/players/${id}`)
            const data = await response.json() 
            setPlayer(data.data.player) 
        }

        fetchPlayer()
    }, [id])

    if (!player) return <div>Loading...</div> 


    return (
        <Container>
            <Card>
                <Card.Img variant="top" src={player?.imageUrl} alt={player?.name} />
                <Card.Body>
                    <Card.Title>{player?.name}</Card.Title>
                    <Card.Text>Breed: {player?.breed}</Card.Text>
                    <Card.Text>Status: {player?.status}</Card.Text>
                    <DeletePlayer id={id} />
                </Card.Body>
            </Card>
        </Container>
    )
}