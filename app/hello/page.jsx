const HelloPage = async () => {
    const response = await fetch('http://localhost:3000/api/hello');
    const data = await response.json();

    return (
        <div>
            <h1>API Response</h1>
            <p>{data.message}</p>
        </div>
    )
}

export default HelloPage;