import { useState, useEffect } from 'react';
import '../assets/styles.css'
import flower from '../assets/images/sunflower.jpg'
import { fetchImages } from '../redux/image/imageActions';
import { useSelector, useDispatch } from 'react-redux';

function ImageContainer() {
    const imageData = useSelector((state) => state.image)
    console.log("imageData in the image component", imageData)

    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(fetchImages());
    }, []);

    const [query, setQuery] = useState("")
    return (
        <div className="app">
        <input placeholder="search title" onChange={event => setQuery(event.target.value)} />
        {imageData
            && imageData.images
            && imageData.images.filter(post => {
                if (query === '') {
                    return post;
                } else if (post.tags.toLowerCase().includes(query.toLowerCase())) {
                    return post;
                }
            }).map((post, index) => (
                <div className="box" key={index}>
                    <img src={flower} alt='a' />
                </div>
            ))
        }
        </div>
    );
}

export default ImageContainer;
