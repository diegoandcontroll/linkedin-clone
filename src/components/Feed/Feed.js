import React, { useEffect, useState } from 'react'
import './Feed.css';
import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from '@mui/icons-material';
import InputOption from './InputOption/InputOption';
import Post from './Posts/Post';
import { db } from '../../firebase';
import firebase from 'firebase';
const Feed = () => {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
        
      })))
    })
  },[])
  const HandlePost = (e) => {
    e.preventDefault();
     db.collection('posts').add({
      name: 'Diego Lucas',
      description: 'Hellow World i liked sex',
      message: input,
      photoUrl: '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
     })
    setInput('')
  }
  return (
    <div className='feed'>
      <div className="feed__inputContainer">
          <div className="feed__input">
            <Create />
            <form >
              <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
              <button onClick={HandlePost} type='submit' >Send</button>
            </form>
          </div>
          <div className="feed__inputOptions">
          <InputOption title="Photo" Icon={Image} color="#70B5F9" />
          
          <InputOption title="Video" Icon={Subscriptions} color="#E7A33E" />
          
          <InputOption title="Event" Icon={EventNote} color="#C0CBCD" />
          
          <InputOption title="Write article" Icon={CalendarViewDay} color="#75C15E"/>
        </div>
      </div>
      {posts.map(({id, data: {name, description, message, photoUrl}}) => (
        <Post key={id} name={name} description={description} message={message} photoUrl={ photoUrl }/>
      ))}
      
    </div>
  )
}

export default Feed