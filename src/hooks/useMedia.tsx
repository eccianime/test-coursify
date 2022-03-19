import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { ENDPOINTS } from '../services/endpoints';
import { IMedia } from '../components/PostItem/types';

const useMedia = (featured_media: number) => {
    const [media, setMedia] = useState<string>('');
    const getMedia = useCallback(async () => {
        const { data }: { data: IMedia } = await axios.get(`${ENDPOINTS.Media}/${featured_media}`);
        setMedia(data.media_details.sizes.thumbnail.source_url);
    }, [])
    useEffect(() => {
        getMedia();
    }, [])
    return media;
}

export default useMedia;