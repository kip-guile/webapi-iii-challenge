import React, {useState, useEffect} from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import { Link } from 'react-router-dom';
import Users from './components/User';
import Post from './components/Post';
import { Button } from 'antd';

const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : ''

function App() {
  const [userArray, setUserArray] = useState([])

  const getUsers = () => {
    axios.get(baseUrl + '/api/users')
    .then(res => {
        setUserArray(res.data)
    })
    .catch(error => {
        console.log(error.message)
    })
  }

  useEffect(() => {
    getUsers()
  }, [])


  return (
    <div className="App">
      <div>
        <Link to ={'/'}><Button type="primary">Users</Button></Link>
        <Link to ={'/posts'}>Posts</Link>
      </div>
      <Route exact path="/" render={(props) => <Users {...props} userArray={userArray} getUsers={getUsers}/>}/>
      <Route path="/posts" render={(props) => <Post {...props} userArray={userArray} getUsers={getUsers}/>}/>
    </div>
  );
}

export default App;
