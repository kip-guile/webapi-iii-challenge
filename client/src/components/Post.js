import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PostCard from './postCard';
import { Button } from 'antd';
import CollectionCreateForm from './postModal';

const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : ''


const Post = (props) => {
    console.log(process.env.NODE_ENV)
    const userArray = props.userArray;
    const [postArray, setPostArray] = useState([])
    const [isVisible, setIsVisible] = useState(false)

    const showModal = () => {
        setIsVisible(true)
    }

    const handleCancel = () => {
        setIsVisible(false)
    }

    const handleSubmit = (formValues, actions) => {
        axios.post(baseUrl + `/api/users/${formValues.user_id}/posts/`, {user_id: formValues.user_id, text: formValues.text})
            .then(res => {
                actions.resetForm();
                setIsVisible(false)
            })
            .catch(err => {
                console.log(err.message)
            })
    }

      const saveFormRef = formRef => {
        formRef = formRef;
      };

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
        <div>
            <Button type="primary" onClick={showModal}>Add Post</Button>
            <CollectionCreateForm
                wrappedComponentRef={saveFormRef}
                visible={isVisible}
                onCancel={handleCancel}
                handleSubmit={handleSubmit}
                />
        {
            postArray.map(post => 
        <div key={post.id}>
            <PostCard text={post.text} userId={post.user_id} userArray={userArray}/>
        </div>    
        )
        }
        </div>
    )
}

export default Post;