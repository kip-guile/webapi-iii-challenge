import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PostCard from './postCard';

const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : ''


const Post = (props) => {
    console.log(process.env.NODE_ENV)
    const userArray = props.userArray;
    const [postArray, setPostArray] = useState([])

    useEffect(() => {
        axios.get(baseUrl + '/api/posts')
            .then(res => {
                setPostArray(res.data)
            })
            .catch(error => {
                console.log(error.message)
            })
    }, [])


    return (
        postArray.map(post => 
        <div key={post.id}>
            <PostCard text={post.text} userId={post.user_id} userArray={userArray}/>
        </div>    
        )
    )
}

export default Post;