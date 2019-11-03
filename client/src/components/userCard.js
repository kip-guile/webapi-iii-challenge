import React, {useState} from 'react';
import { Card } from 'antd';
import { Button } from 'antd';
import ViewModal from './viewModal';
import CollectionCreateForm from './userModal';

const UserCard = (props) => {
    const {name, userDelete, id, userEdit, setUserToEdit, isEditVisible, setIsEditVisible} = props;
    const [isVisible, setIsVisible] = useState(false)
    // const [isEditVisible, setIsEditVisible] = useState(false)

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
    
    return (
        <Card title="Default size card" extra={<button onClick={() => showModal()}>view</button>} style={{ margin: '1.5em', backgroundColor: 'pink', width: 300 }}>
            <h2>{name}</h2>
            <div>
            <Button style={{ margin: '0.3em'}} type="primary" onClick={() => showEditModal()}>Edit</Button>
            <CollectionCreateForm
                wrappedComponentRef={saveFormRef}
                visible={isEditVisible}
                onCancel={handleEditCancel}
                handleSubmit={userEdit}
                />
            <Button style={{ margin: '0.3em'}} type="primary" onClick={() => userDelete(id)}>delete</Button>
            <ViewModal
                // wrappedComponentRef={saveFormRef}
                visible={isVisible}
                onCancel={handleCancel}
                id={id}
                />
            </div>
        </Card>
    )
}

export default UserCard;