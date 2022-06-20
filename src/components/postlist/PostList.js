import React, {useState, useEffect} from "react";
import PostListItem from "./PostListItem";


const PostList = () => {
//want to show List from the data
    const [postListData, setpostListData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/destinations') // 1step I am calling my api, request get
        .then((response) => response.json())
        // .then((dataJson) => console.log(dataJson))
        .then((json) => setpostListData(json))
    }, [])
    console.log(postListData)

    
    return(
        <div className="PostList">
            <PostListItem 
            postListItems={postListData}

            />
        </div>
    )
}

export default PostList;