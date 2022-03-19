import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import useMedia from '../../hooks/useMedia';
import { BaseNavigationProps } from '../../navigators/types';
import styles from './styles';
import { IPostItem } from './types';

const PostItem = ({ data, isLast }: IPostItem) => {
    const media = useMedia(data.featured_media);
    const navigation = useNavigation<BaseNavigationProps>();
    return (
        <TouchableOpacity style={[styles.buttonWrapper, isLast && styles.buttonWrapperLast]} onPress={() => navigation.navigate('Post', { data })}>
            {media.length > 0 && <Image fadeDuration={0} source={{ uri: media }} style={styles.image} />}
            <View style={styles.viewContent}>
                <Text numberOfLines={2} style={styles.textTitle}>{data.title.rendered}</Text>
                <Text numberOfLines={4} style={styles.textExcerpt}>{data.excerpt.rendered.replace(/<[^>]*>?/gm, '')}</Text>
                <Text style={styles.textSeeMore}>Leia mais</Text>
            </View>
        </TouchableOpacity>
    );
}

export default PostItem;