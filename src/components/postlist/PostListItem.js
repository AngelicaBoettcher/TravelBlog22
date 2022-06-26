import React from "react";
import './postListItem.css';
import { Link } from "react-router-dom";


const PostListItem = ({ postListItems }) => {

    return (

        <section className="postListBox">
            {
                postListItems.map(postListItem => {



                    return (
                        <Link to={`/post/${postListItem._id}`} key={postListItem._id}>
                            <div className="postListItem">

                                <img className="postListImg" src={postListItem.img} alt={postListItem.title} />
                                <div className="postListText">
                                    <p className="title">{postListItem.title}</p>
                                    <p>Arrival day: {postListItem.visitingdate}</p>
                                    <div className="authorItem">
                                        <img className="authorImg" src={postListItem.authorimg} alt={postListItem.authorname} />
                                        <p><span>post written by </span>{postListItem.authorname}</p>
                                    </div>
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