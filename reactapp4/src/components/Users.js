import React from 'react'

function Users() {
    const users = [
        { id: 1, name: "Shad" },
        { id: 2, name: "Jannat" },
        { id: 3, name: "Saad" }
    ];
    return (
        <>
            <h1>Users</h1>
            <ul>
            {users.map(user => {
                return (<li key={user.id}>{user.id}: {user.name}</li>)

            })
            }
            </ul>


        </>
    )
}

export default Users
