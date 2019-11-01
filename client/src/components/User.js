import React from 'react';
import styled from 'styled-components';
import UserCard from './userCard';


const Users = (props) => {
    console.log(process.env.NODE_ENV)
    const userArray = props.userArray;


    return (
        userArray.map(user => 
        <div key={user.id}>
            <UserCard name={user.name}/>
        </div>    
        )
    )
}

export default Users;