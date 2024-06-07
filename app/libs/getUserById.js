export default async function getUsersById(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    return response.json()
}