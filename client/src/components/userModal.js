import React from 'react';
import 'antd/dist/antd.css';
import {AntInput} from "./createAntFields";
import { Formik, Form, Field } from 'formik';

import { Modal } from 'antd';

const CollectionCreateForm = (props) => {
    const {visible, onCancel, onCreate, handleSubmit} = props;


    return (
        <Modal
          visible={visible}
          title="Create a new user"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Formik
            initialValues={{name: ''}}
            onSubmit={handleSubmit}
            render={() => (
                <Form className="form-container">
                <div>
                    <Field component={AntInput} name='name' type="text" placeholder='Name' />
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