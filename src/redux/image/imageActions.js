import axios from "axios"

export const FETCH_IMAGES_REQUEST = 'FETCH_IMAGES_REQUEST'
export const FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS'
export const FETCH_IMAGES_FAILURE = 'FETCH_IMAGES_FAILURE'

const fetchImagesRequest = () => {
    return {
        type: FETCH_IMAGES_REQUEST
    }
}

const fetchImagesSuccess = images => {
    return {
        type: FETCH_IMAGES_SUCCESS,
        payload: images
    }
}

const fetchImagesFailure = error => {
    return {
        type: FETCH_IMAGES_FAILURE,
        payload: error
    }
}

export const fetchImages = () => {
    return (dispatch) => {
        dispatch(fetchImagesRequest())
        axios.get('https://pixabay.com/api/?key=26680467-f23804cff8e6e49ca4c6bbb4c&q=yellow+flowers&image_type=photo')
        .then(response => {
            // response.data is the array of images
            const images = response.data.hits
            console.log('hello from image action', images)
            dispatch(fetchImagesSuccess(images))
        })
        .catch(error => {
            // error.message is the error description
            const errorMsg = error.message
            dispatch(fetchImagesFailure(errorMsg))
        })
    }
}
