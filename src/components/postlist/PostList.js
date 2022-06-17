import React, {useState} from "react";
import PostListItem from "./PostListItem";
import traveldata from '../../traveldata.json';

const PostList = () => {
//want to show List from the data
    const [postListData, setpostListData] = useState(traveldata);

    

    
    return(
        <div className="PostList">
            <PostListItem 
            postListItems={postListData}

            />
        </div>
    )
}

export default PostList;