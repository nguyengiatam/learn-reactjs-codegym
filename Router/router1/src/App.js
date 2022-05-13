import { Input } from './components/input';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';

export function Login() {
  const [data, setData] = useState({ username: '', password: '' })
  const navigate = useNavigate()

  function updateData(val) {
    setData({ ...data, ...val })
  }

  function handleLogin() {
    if (!data.username || !data.password) {
      alert('Please enter a username and password')
      return null
    }
    axios.post('/api/login', data).then(res => {
      navigate('/index', ({ state: { ...res.data } }))
    }).catch(err => {
      alert(err.response.data.message);
      setData({ username: '', password: '' })
    })
  }
  return (
    <div className="App">
      <Input type={"text"} regex={/^\w{6,}$/} label={"username"} callback={updateData} />
      <Input type={"password"} regex={/(?=.*[!@#$%^&]+)(?=.*[a-z]+).{6,}/} label={"password"} callback={updateData} />
      <button onClick={handleLogin}> Login </button>
    </div>
  );
}

export function Index() {
  console.log(useLocation().state);
  const info = useLocation().state;
  return (
    <>
      <div>Name: {info.name}</div>
      <div>Age: {info.age}</div>
      <div>Gender: {info.gender}</div>
      <div>Job: {info.job}</div>
      <div>Nick name: {info.nick}</div>
      <div>Web: <a href={info.url} alt={'hihi'}>MyWebsite</a></div>
    </>
  )
}
