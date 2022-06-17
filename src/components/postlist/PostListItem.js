import React from "react";
import './postListItem.css';

const PostListItem = ({ postListItems }) => {
    return (
        <section className="postListBox">
            {
                postListItems.map(postListItem => {
                    return (
                        <div className="postListItem">
                            <img className="img" src={postListItem.img} alt={postListItem.title} />
                            <p>{postListItem.title}</p>
                            <p>{postListItem.visitingdate}</p>
                            <div className="authorItem">
                                <img className="authorimg" src={postListItem.authorimg} alt={postListItem.authorname} />
                                <p>{postListItem.authorname}</p>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default PostListItem;