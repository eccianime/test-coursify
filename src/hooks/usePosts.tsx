import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import { ICategory } from '../components/Category/types';
import { IPost } from '../components/PostItem/types';
import { ENDPOINTS } from '../services/endpoints';

const usePosts = (category: ICategory) => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const getPosts = useCallback(async () => {
        const { data } = await axios.get(`${ENDPOINTS.Posts}?categories=${category.id}`);
        setPosts(data);
    }, [category])
    useEffect(() => {
        getPosts();
    }, [])
    return posts;
}

export default usePosts;