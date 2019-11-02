import React from 'react';
import 'antd/dist/antd.css';
import {AntInput} from "./createAntFields";
import { Formik, Form, Field } from 'formik';
import { Button } from 'antd';

import { Modal, Input } from 'antd';

const CollectionCreateForm = (props) => {
    const {visible, onCancel, onCreate, handleSubmit} = props;


    return (
        <Modal
          visible={visible}
          title="Create a new post"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Formik
            initialValues={{user_id: '', text: ''}}
            onSubmit={handleSubmit}
            render={() => (
                <Form className="form-container">
                <div>
                    <Field component={AntInput} name='user_id' type="text" placeholder='User ID' />
                </div>
                <div>
                    <Field component={AntInput} name='text' type="text" placeholder='Text' />
                </div>
                <div className="submit-container">
                <button className="ant-btn ant-btn-primary" type="submit">
                    Submit
                </button>
                </div>
                </Form>
            )}
        />
        </Modal>
    )
}

export default CollectionCreateForm;