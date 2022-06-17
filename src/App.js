import React from 'react';
import './App.css';
import Header from './components/Header';
import PostList from './components/postlist/PostList';
import MapComponent from './components/googlemap/MapComponent';


function App() {
  return (
    <div className="App">
      <Header />
      <PostList />
      <MapComponent />
    </div>
  );
}

export default App;
