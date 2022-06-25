import React, {useState} from "react";

const CreatePost = ({sendData}) => {
    const [title, setTitle] = useState('');
    const [visitingDate, setvisitingDate] = useState('');
    const [locationImg, setLocationImg] = useState('');
    const [authorName, setauthorName] = useState('');
    const [authorImg, setauthorImg] = useState('');
    const [authorResume, setAuthorResume] = useState('');
    const [description, setDescription] = useState('');
    const [favoritePlaceImg, setFavoritePlaceImg] = useState('');
    const [detailPageImg, setdetailPageImg] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
         sendData({title: title, 
            visitingdate: visitingDate, 
            img: locationImg, 
            authorname: authorName, 
            authorimg: authorImg,
            authorresume: authorResume , 
            description: description, 
            favoriteplace: favoritePlaceImg, 
            imgdetailpage: detailPageImg});
    }    

    return (
        <div className="createDestination">
            <h2>Create your new Post here</h2>
            <form onSubmit={handleSubmit}  className='form-container'>
                <label>Your destination:
                <input
                    className=''
                    type='text'
                    placeholder='Enter your destination'
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                /><br/></label>
                <label>Date of your journey:
                <input
                    className=''
                    type='date'
                    placeholder='Enter the date of your journey start'
                    required
                    value={visitingDate}
                    onChange={(e) => setvisitingDate(e.target.value)}
                /><br/></label>
                <label>url of an image of your destination:
                <input
                    type="url"
                    name="url"
                    placeholder="https://example.com"
                    pattern="https://.*" size="30"
                    required
                    value={locationImg}
                    onChange={(e) => setLocationImg(e.target.value)}
                /><br/></label>
                <label>Your name:
                <input
                    className=''
                    type='text'
                    placeholder='Enter your name'
                    required
                    value={authorName}
                    onChange={(e) => setauthorName(e.target.value)}
                /><br/></label>
                <label>URL of an image of yourself:
                <input
                    className=''
                    type='url'
                    placeholder='https://example.com'
                    required
                    value={authorImg}
                    onChange={(e) => setauthorImg(e.target.value)}
                /><br/></label>
                <label>Tell us something about you:
                <textarea
                    
                    rows="5"
                    cols= "40"
                    required
                    value={authorResume}
                    onChange={(e) => setAuthorResume(e.target.value)}>
                </textarea><br/></label>
                <label>Tell us about your journey:
                <textarea
                    rows="5"
                    cols= "60"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}>
                </textarea><br/></label>
                <label>URL of an image of yourself:
                <input
                    className=''
                    type='url'
                    placeholder='https://example.com'
                    required
                    value={favoritePlaceImg}
                    onChange={(e) => setFavoritePlaceImg(e.target.value)}
                /><br/></label>
                <label>URL of an image of yourself:
                <input
                    className=''
                    type='url'
                    placeholder='https://example.com'
                    required
                    value={detailPageImg}
                    onChange={(e) => setdetailPageImg(e.target.value)}
                /><br/></label>
                <button type='submit'>Click here!</button>
            </form>
        </div>
    )
}

export default CreatePost;