export default async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        cache: 'no-store'
    })
    return response.json()
}