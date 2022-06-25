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
  
  const sendData = (data) => {

    fetch('http://localhost:5000/createdestination', // 1step I am )
      {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    setpostMainData([...postMainData, data]);

  }



  useEffect(() => {
    fetch('http://localhost:5000/destinations') // 1step I am calling my api, request get
      .then((response) => response.json())
      // .then((dataJson) => console.log(dataJson))

      .then((json) => {
        json.data.sort(function(a,b){
          return new Date(b.visitingdate) - new Date(a.visitingdate);
        });
        setpostMainData(json.data);
      })
  }, [])


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home postMainData={postMainData} />} />
        <Route path="contact" element={<Contact />} />
        <Route path="newpost" element={<CreatePost sendData={sendData} />} />
        <Route path="login" element={<LoginEl />} />
        <Route path="post/:id" element={<DetailPage />} />
      </Routes>


    </div>
  );
}

export default App;
