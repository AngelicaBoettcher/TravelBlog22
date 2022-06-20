import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import PostList from './components/postlist/PostList';
import MapComponent from './components/googlemap/MapComponent';
import Contact from "./components/contact/Contact";
import CreatePost from "./components/createpost/CreatePost";
import LoginEl from "./components/login/Login";

function App() {
  const sendData = (data) => {
    console.log(data);
  }
  return (
    <div className="App">
      <Header />
      <div className='main'>
      <PostList />
      <MapComponent />
      </div>
      <Routes>
                <Route path="contact" element={<Contact />} />
                <Route path="newpost" element={<CreatePost sendData={sendData} />} />
                <Route path="login" element={<LoginEl />} />
            </Routes>
    </div>
  );
}

export default App;
