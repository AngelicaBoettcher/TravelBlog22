import React from "react";
import PostListItem from "./PostListItem";


const PostList = ({postListData}) => {

    

    
    return(
        <div className="PostList">
            <h2>See here the last visited places:</h2>
            <PostListItem 
            postListItems={postListData}

            />
        </div>
    )
}

export default PostList;