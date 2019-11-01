import React, {useState, useEffect} from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import { Link } from 'react-router-dom';
import Users from './components/User';
import Post from './components/Post';

const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : ''

function App() {
  const [userArray, setUserArray] = useState([])

  useEffect(() => {
    axios.get(baseUrl + '/api/users')
        .then(res => {
            setUserArray(res.data)
        })
        .catch(error => {
            console.log(error.message)
        })
  }, [])


  return (
    <div className="App">
      <div>
        <Link to ={'/'}>Users</Link>
        <Link to ={'/posts'}>Posts</Link>
      </div>
      <Route exact path="/" render={(props) => <Users {...props} userArray={userArray}/>}/>
      <Route path="/posts" render={(props) => <Post {...props} userArray={userArray}/>}/>
    </div>
  );
}

export default App;
