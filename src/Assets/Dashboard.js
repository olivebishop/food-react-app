import React, { useEffect, useState } from 'react'

function Dashboard() {
    const [posts, setPost] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => setPost(data));
    }, [posts] )
    return (
        <div>
            <h1>Welcome to Dashboard</h1>
            <table>
                <tr>
                    <thead>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th colSpan="2">Action</th>
                    </thead>
                </tr>
            {
                posts.map(item => {
                    return(
                        <tr>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                        <td>Edit</td>
                        <td>Delete</td>
                        </tr>
                    )
                })
            }
            </table>
            {console.log(posts)}
        </div>
    )
}

export default Dashboard;