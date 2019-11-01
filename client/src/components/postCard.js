import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    padding: 1em;
    margin: 1.5em;
    display: flex;
    flex-direction: column;
    flex-basis: 20%;
    background-color: yellow;`

const PostCard = (props) => {
    const {text, userId, userArray} = props;

    const user = userArray.find(({id}) => id === userId)
    
    return (
        <Card>
            <h3>{text}</h3>
            <h5>{user.name}</h5>
            <div>
            <button>edit</button>
            <button>delete</button>
            </div>
        </Card>
    )
}

export default PostCard;