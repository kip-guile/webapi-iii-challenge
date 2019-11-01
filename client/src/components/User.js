import React from 'react';
import styled from 'styled-components';
import UserCard from './userCard';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : ''


const Users = (props) => {
    const {getUsers} = props;
    console.log(process.env.NODE_ENV)
    const userArray = props.userArray;

    const addUser = (formValues, actions) => {
        axios.post(baseUrl + '/api/users/', {name: formValues.name})
            .then(res => {
                actions.resetForm();
                getUsers();
            })
            .catch(err => {
                console.log(err.message)
            })
    }



    return (
        <div>
        <div>
        {
            <Formik
            initialValues={{name: ''}}
            onSubmit={addUser}
            render={() => (
                <Form>
                <div>
                    <Field name='name' type="text" placeholder='Add Name' />
                </div>
                <div>
                    <input type='submit' />
                </div>
                </Form>
            )}
        />

        }
        </div>
        {
        userArray.map(user => 
        <div key={user.id}>
            <UserCard name={user.name} id={user.id} getUsers={getUsers}/>
        </div>    
        )
        }
        </div>
    )
}

export default Users;