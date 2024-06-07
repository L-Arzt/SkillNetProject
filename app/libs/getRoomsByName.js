export default async function getRoomsByName(id) {
    const response = await fetch(`http://localhost:1000/rooms/${id}`)
    return response.json()
}