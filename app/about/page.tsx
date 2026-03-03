export default async function page() {

    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await res.json()
    console.log(data)
    return (
        <div>
            <div>Ayanocha-n</div>
            <div>About Page: {data.title}</div>
        </div>
    )
}