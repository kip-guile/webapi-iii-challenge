import React, {useState} from 'react';
import axios from 'axios';
import { Card } from 'antd';
import { Button } from 'antd';
import ViewModal from './viewModal';
import CollectionCreateForm from './userModal';

const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : ''

const UserCard = (props) => {
    const {name, userDelete, id, getUsers} = props;
    const [isVisible, setIsVisible] = useState(false)
    const [userToEdit, setUserToEdit] = useState('')
    const [isEditVisible, setIsEditVisible] = useState(false)

    const showEditModal = () => {
        setUserToEdit(id)
        setIsEditVisible(true)
    }

    const handleEditCancel = () => {
        setIsEditVisible(false)
    }

    const showModal = () => {
        setIsVisible(true)
    }

    const handleCancel = () => {
        setIsVisible(false)
    }

    const saveFormRef = formRef => {
        formRef = formRef;
      };

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
        <Card title={<h3>{name}</h3>} extra={<button onClick={() => showModal()}>view</button>} style={{ margin: '1.5em', backgroundColor: 'pink', width: 300 }}>
            <div>
            <Button style={{ margin: '0.3em'}} type="primary" onClick={() => showEditModal()}>Edit</Button>
            <CollectionCreateForm
                wrappedComponentRef={saveFormRef}
                visible={isEditVisible}
                onCancel={handleEditCancel}
                handleSubmit={editUser}
                />
            <Button style={{ margin: '0.3em'}} type="primary" onClick={() => userDelete(id)}>delete</Button>
            <ViewModal
                visible={isVisible}
                onCancel={handleCancel}
                id={id}
                />
            </div>
        </Card>
    )
}

export default UserCard;