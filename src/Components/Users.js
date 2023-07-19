import React from "react"
import { Table,Alert } from "react-bootstrap"
import { useState, useEffect } from "react"
import axios from "axios"
export default () => {
    const [users, setUsers] = useState([])
    const [netStat,setNetStat] = useState("ONLINE")
    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await axios.get("https://jsonplaceholder.typicode.com/users")
                // console.log(res.data); 
                setUsers(res.data)
                localStorage.setItem('users', JSON.stringify(res.data))
                setNetStat("ONLINE")

            }
            catch (e)
            {
                console.log(e)
                // alert("You are Offline")
                let users = localStorage.getItem('users')
                setUsers(JSON.parse(users))
                setNetStat("OFFLINE")

            }
        }
        getUsers()
    },[])
    return (
        <>  
            {
                netStat === "OFFLINE" && (
                    <Alert key="warning" variant="warning">
                     You are in offline mode or there is some issue with remote  connection.
                    </Alert>
                )
            }
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users && (
                            users.map((user) => (
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.username}</td>
                                </tr>
                            ))
                        )
                    }
                    
                </tbody>
            </Table>
        </>
    )
}