import React, {useState} from 'react';
import { Card } from 'antd';
import { Button } from 'antd';
import ViewModal from './viewModal';

const UserCard = (props) => {
    const {name, userDelete, id} = props;
    const [isVisible, setIsVisible] = useState(false)

    const showModal = () => {
        setIsVisible(true)
    }

    const handleCancel = () => {
        setIsVisible(false)
    }
    
    return (
        <Card title="Default size card" extra={<button onClick={() => showModal()}>view</button>} style={{ margin: '1.5em', backgroundColor: 'pink', width: 300 }}>
            <h2>{name}</h2>
            <div>
            <Button style={{ margin: '0.3em'}} type="primary">Edit</Button>
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