import React, {useState} from 'react';
import UserCard from './userCard';
import axios from 'axios';
import '../App.css';
import { Button } from 'antd';
import CollectionCreateForm from './userModal';

const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : ''


const Users = (props) => {
    const {getUsers} = props;
    const userArray = props.userArray;
    const [isVisible, setIsVisible] = useState(false)

    const showModal = () => {
        setIsVisible(true)
    }

    const handleCancel = () => {
        setIsVisible(false)
    }

    const handleSubmit = (formValues, actions) => {
        console.log(formValues);
        actions.resetForm();
        setIsVisible(false)
    }

      const saveFormRef = formRef => {
        formRef = formRef;
      };

    const addUser = (formValues, actions) => {
        axios.post(baseUrl + '/api/users/', {name: formValues.name})
            .then(res => {
                actions.resetForm();
                setIsVisible(false)
                getUsers();
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    const deleteUser =() => {

    }



    return (
        <div>
        <div>
        <Button type="primary" onClick={showModal}>Add User</Button>
            <CollectionCreateForm
                wrappedComponentRef={saveFormRef}
                visible={isVisible}
                onCancel={handleCancel}
                handleSubmit={addUser}
                />
        </div>
        {
        userArray.map(user => 
        <div key={user.id}>
            <UserCard name={user.name} id={user.id} getUsers={getUsers} userDelete={deleteUser}/>
        </div>    
        )
        }
        </div>
    )
}

export default Users;