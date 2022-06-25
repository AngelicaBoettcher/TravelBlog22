import React from "react";
import './postListItem.css';
import {Link} from "react-router-dom";


const PostListItem = ({ postListItems }) => {
    
    return (
        
        <section className="postListBox">
            {
                postListItems.map(postListItem => {

                    

                    return (
                        <Link to={`/post/${postListItem._id}`} key={postListItem._id}>
                        <div className="postListItem">
                            
                            <img className="img" src={postListItem.img} alt={postListItem.title} />
                            <p>{postListItem.title}</p>
                            <p>{postListItem.visitingdate}</p>
                            <div className="authorItem">
                                <img className="authorImg" src={postListItem.authorimg} alt={postListItem.authorname} />
                                <p>{postListItem.authorname}</p>
                            </div>
                        </div>
                        </Link>
                    )
                })
            }
        </section>
    )
}
//onClick={() => navigate("/post/id")}

export default PostListItem;