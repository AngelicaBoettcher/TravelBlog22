import React from "react";
import PostListItem from "./PostListItem";


const PostList = ({postListData}) => {

    

    
    return(
        <div className="PostList">
            <PostListItem 
            postListItems={postListData}

            />
        </div>
    )
}

export default PostList;