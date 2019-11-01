import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import UserCard from './userCard';

const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : ''


const Users = () => {
    console.log(process.env.NODE_ENV)
    const [userArray, setUserArray] = useState([])

    useEffect(() => {
        axios.get(baseUrl + '/api/users')
            .then(res => {
                setUserArray(res.data)
            })
            .catch(error => {
                console.log(error.message)
            })
    }, [])


    return (
        userArray.map(user => 
        <div key={user.id}>
            <UserCard name={user.name}/>
        </div>    
        )
    )
}

export default Users;