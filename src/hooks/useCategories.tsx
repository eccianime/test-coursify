import { useCallback, useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { ENDPOINTS } from '../services/endpoints';
import { ICategory } from '../components/Category/types';
import { ISelectedOption } from '../components/Picker/types';
import { IPost } from '../components/PostItem/types';

const useCategories = (selectedOrder: ISelectedOption) => {
    const [categories, setCategories] = useState<ICategory[]>([]);

    const addViewsToData = async (data: ICategory[]) =>
        await Promise.all(
            data.map(async category => {
                const { data: posts }: { data: IPost[] } = await axios.get(`${ENDPOINTS.Posts}?categories=${category.id}`)
                category.views = posts.reduce((p, c) => ({ ...p, page_views: p.page_views + c.page_views })).page_views;
            })
        )

    const getCategories = useCallback(async () => {
        let { data }: AxiosResponse<ICategory[]> = await axios.get(ENDPOINTS.Categories);
        switch (selectedOrder) {
            case 'ASC':
                data = data.sort((a, b) => a.name.localeCompare(b.name))
                break;
            case 'DESC':
                data = data.sort((a, b) => b.name.localeCompare(a.name))
                break;
            case 'MORE_VIEWS':
                await addViewsToData(data);
                data = data.sort((a, b) => a.views - b.views)
                break;
            case 'LESS_VIEWS':
                await addViewsToData(data);
                data = data.sort((a, b) => b.views - a.views)
                break;
            default: break;
        }
        setCategories(data);
    }, [selectedOrder])
    useEffect(() => {
        getCategories();
    }, [selectedOrder])
    return categories;
}

export default useCategories;