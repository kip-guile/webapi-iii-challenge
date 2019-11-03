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
    const [isEditVisible, setIsEditVisible] = useState(false)
    const [userToEdit, setUserToEdit] = useState('')

    const showModal = () => {
        setIsVisible(true)
    }

    const handleCancel = () => {
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

    const deleteUser =(id) => {
        axios.delete(baseUrl + `/api/users/${id}`)
            .then(() => {
                getUsers();
            })
            .catch(err => {
                console.log(err.message)
            })

    }

    const editUser =(formValues, actions) => {
        axios.put(baseUrl + `/api/users/${userToEdit}`, {name: formValues.name})
            .then(res => {
                actions.resetForm();
                setIsEditVisible(false)
                getUsers();
            })
            .catch(err => {
                console.log(err.message)
            })

    }



    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
        <div>
        <Button type="primary" onClick={showModal}>Add User</Button>
        </div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
        <div>
        
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
            <UserCard name={user.name} id={user.id} getUsers={getUsers} userDelete={deleteUser} userEdit={editUser} setUserToEdit={setUserToEdit} isEditVisible={isEditVisible} setIsEditVisible={setIsEditVisible}/>
        </div>    
        )
        }
        </div>
        </div>
    )
}

export default Users;