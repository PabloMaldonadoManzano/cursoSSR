import {useState, useEffect} from 'react'

const useInitialState = (API) => {

    const [ videos, setVideos ] = useState({mylist: [], trends: [], originals: []})
    useEffect( () => {
        fetch(API)
        .then(response => response.json())
        .then(response => setVideos(response))
    }, [])

    return videos

}

export default useInitialState
