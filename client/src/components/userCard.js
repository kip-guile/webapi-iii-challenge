import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    padding: 1em;
    margin: 1.5em;
    display: flex;
    flex-direction: column;
    flex-basis: 20%;
    background-color: pink;`

const UserCard = (props) => {
    const {name, userDelete} = props;
    
    return (
        <Card>
            <h2>{name}</h2>
            <div>
            <button>edit</button>
            <button onClick={userDelete}>delete</button>
            </div>
        </Card>
    )
}

export default UserCard;