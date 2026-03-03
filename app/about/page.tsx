export default async function page() {

    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await res.json()
    console.log(data)
    return (
        <div>About Page: {data.title}</div>
    )
}