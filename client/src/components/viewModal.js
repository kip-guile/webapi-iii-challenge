import React, {useState, useEffect} from 'react';
import 'antd/dist/antd.css';
import axios from 'axios';
import {AntInput} from "./createAntFields";
import { Button } from 'antd';
import { Modal } from 'antd';

const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : ''

const ViewModal = (props) => {
    const {id, visible, onCancel, onCreate} = props;
    const [user, setUser] = useState({})

    useEffect(() => {
        axios.get(baseUrl + `/api/users/${id}`)
            .then(res => {
                setUser(res.data)
            })
            .catch(err => {
                console.log(err.message)
            })
    }, [])


    return (
        <Modal
        visible={visible}
        title="Create a new post"
        okText="Create"
        onCancel={onCancel}
        onOk={onCreate}
      >
        <div>
            <h2>{user.name}</h2>
        </div>
    
      </Modal>
    )
}

export default ViewModal;