import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import { auth } from '../../firebase';
import './Login.css'
const Login = () => {
  const [name, setName] = useState('');
  const [imageProfileUrl, setImageProfileUrl] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
      dispatch(login({
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: userAuth.user.displayName,
        profileUrl: userAuth.user.photoURL
      }))
    }).catch(error => alert(error))
  };
  const handleRegister = () => {
    if (!name) {
      return alert('Please enter fullname!')
    }

    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      userAuth.user.updateProfile({
        displayName: name,
        photoURL: imageProfileUrl,
      }).then(() => {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoURL: imageProfileUrl
        }));
      }).catch((error) => alert(error))
    })
  };
  return (
    <div className='login'>
      <img
        src="https://www.pinclipart.com/picdir/middle/55-557165_graphic-transparent-library-file-logo-wikimedia-commons-transparent.png"
        alt="linkin logo"
      />

      <form>
        <input type="text" placeholder='Fullname  (required if registering)' value={name} onChange={(e) => setName(e.target.value)} />
        
        <input type="text" placeholder='Profile pic URL (optional)' value={imageProfileUrl} onChange={(e) => setImageProfileUrl(e.target.value)} />
        
        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        
        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        
        <button type='submit' onClick={handleLogin}>Sign In</button>
      </form>
      <p>Not a member? 
        <span className='login__register' onClick={handleRegister}>Register Now</span>
      </p>
    </div>
  )
}

export default Login