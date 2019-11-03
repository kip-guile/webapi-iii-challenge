import React, {useState, useEffect} from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import { Link } from 'react-router-dom';
import Users from './components/User';
import Post from './components/Post';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

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
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">
        <Link to ={'/'}>Users</Link>
        </Menu.Item>
        <Menu.Item key="2">
        <Link to ={'/posts'}>Posts</Link>
        </Menu.Item>
       
      </Menu>
    </Header>
    <Content style={{ padding: '0 0px' }}>

      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
      <Route exact path="/" render={(props) => <Users {...props} userArray={userArray} getUsers={getUsers}/>}/>

      <Route path="/posts" render={(props) => <Post {...props} userArray={userArray} getUsers={getUsers}/>}/>
        </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Alexander's first monolith</Footer>
  </Layout>
  );
}

export default App;
