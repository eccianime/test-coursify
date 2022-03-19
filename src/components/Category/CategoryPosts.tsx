import React from 'react';
import { ScrollView } from 'react-native';

import usePosts from '../../hooks/usePosts';
import PostItem from '../PostItem';
import { ICategoryPosts } from './types';

const CategoryPosts = ({ category }: ICategoryPosts) => {
    const posts = usePosts(category);
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>{posts.map((post, index) => <PostItem key={post.id} data={post} isLast={index === posts.length - 1} />)}</ScrollView>
    );
}

export default CategoryPosts;