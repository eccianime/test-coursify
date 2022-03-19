export type IPost = {
    id: number;
    name: string;
    status: string;
    featured_media: number;
    content: {
        rendered: string
    };
    page_views: number;
    categories: number[];
    // Vou adicionar uns parámetros que não estão no teste mas é útil para o teste
    title: {
        rendered: string;
    },
    excerpt: {
        rendered: string;
    }
}

export type IPostItem = {
    data: IPost;
    isLast: boolean;
}

export type IMedia = {
    guid: {
        rendered: string;
    },
    source_url: string;
    media_details: {
        sizes: {
            thumbnail: {
                source_url: string
            }
        }
    }
}