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

    const handleChange = (event) => {
        setQuery(event.target.value);
    }
    return (
        <div className="main-container">
            <input className="main-input" placeholder="search ..." onChange={handleChange} />
            <div className="image-container">
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
                            <img className='image-flower' src={post.webformatURL} alt='a' />
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default ImageContainer;
