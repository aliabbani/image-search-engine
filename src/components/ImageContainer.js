import { useState, useEffect } from 'react';
import '../assets/index.css';
import { fetchImages } from '../redux/image/imageActions';
import { useSelector, useDispatch } from 'react-redux';

function ImageContainer() {
    const imageData = useSelector((state) => state.image)

    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(fetchImages());
    }, []);

    const [query, setQuery] = useState("")

    const handleChange = (event) => {
        setQuery(event.target.value);
    }
    return (
        <div className="pt-10 px-2 pb-20">
            <input className="mb-5 w-3/5 h-9" placeholder="search ..." onChange={handleChange} />
            <div className="sm:flex flex-row flex-wrap gap-3 ">
                {imageData
                    && imageData.images
                    && imageData.images.filter(post => {
                        if (query === '') {
                            return post;
                        } else if (post.tags.toLowerCase().includes(query.toLowerCase())) {
                            return post;
                        }
                    }).map((post) => (
                        <div key={post.id}>
                            <img className='image-flower pb-3 sm:pb-0 ' src={post.webformatURL} alt='a' />
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default ImageContainer;
