import React from "react";
import PostList from "./postlist/PostList";
import MapComponent from "./googlemap/MapComponent";


const Home = ({postMainData}) => {
    return (
        <div className='main'>
      <PostList postListData={postMainData}/>
      <MapComponent postListData={postMainData}/>
      </div>
    )

}

export default Home;