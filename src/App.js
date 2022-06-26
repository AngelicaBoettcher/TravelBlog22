import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Contact from "./components/contact/Contact";
import CreatePost from "./components/createpost/CreatePost";
import LoginEl from "./components/login/Login";
import DetailPage from './components/DetailPage';

function App() {

  const [postMainData, setpostMainData] = useState([]);
  
  function getPosts() {
    // get all destinations from backend (mongoDB)
    fetch('http://localhost:5000/destinations')
    // convert string response to JSON
    .then((response) => response.json())
    .then((json) => {
      // sort data by visitingdate
      json.data.sort(function(a,b){
        return new Date(b.visitingdate) - new Date(a.visitingdate);
      });
      setpostMainData(json.data);
    })
  }

  useEffect(() => {
    // load all posts at the beginning (when page is first loaded)
    getPosts();
  }, [])


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home postMainData={postMainData} />} />
        <Route path="contact" element={<Contact />} />
        {/* when CreatePost gets callback "postCreated", 
        trigger function "getPosts" to reload all posts from backend including the new one */}
        <Route path="newpost" element={<CreatePost postCreated={getPosts}/>} />
        <Route path="login" element={<LoginEl />} />
        <Route path="post/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
