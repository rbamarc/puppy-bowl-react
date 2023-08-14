import { useNavigate } from "react-router-dom";

export default function DeletePlayer({id}) {
    const navigate = useNavigate()
    
    const handleDelete = async () => {
        await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-pt-web-pt-e/players/${id}`, {
            method: 'DELETE',
        })
        navigate('/puppy-bowl-react')
    }
    return (
        <button onClick={handleDelete}>Delete</button>
    )
}