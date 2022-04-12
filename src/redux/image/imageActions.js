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

export const fetchImages = () => async (dispatch) => {
    dispatch(fetchImagesRequest())
    try {
        const request = await fetch('https://pixabay.com/api/?key=26680467-f23804cff8e6e49ca4c6bbb4c&q=yellow+flowers&image_type=photo');
        const result = await request.json();
        const images = result.hits
        dispatch(fetchImagesSuccess(images))

    } catch(error) {
        const errorMsg = error.message
        dispatch(fetchImagesFailure(errorMsg))
    }
}
