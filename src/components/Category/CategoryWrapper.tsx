import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import useCategories from '../../hooks/useCategories';
import styles from './styles';
import { COLORS } from '../../utils';
import CategoryPosts from './CategoryPosts';
import { ICategoryWrapper } from './types';

const CategoryWrapper = ({ selectedOrder }: ICategoryWrapper) => {
    const categories = useCategories(selectedOrder);
    return (
        <View style={styles.viewContainer}>
            {categories.map(category => (
                <View key={category.id}>
                    <View style={styles.viewTitleContainer}>
                        <Text style={styles.textTitle}>{category.name.toUpperCase()}</Text>
                        <TouchableOpacity style={styles.buttonSeeMore}>
                            <Text style={styles.textSeeMore}>VER MAIS <Ionicons name='caret-forward' color={COLORS.gray04} size={17} /> </Text>
                        </TouchableOpacity>
                    </View>
                    <CategoryPosts category={category} />
                </View>
            ))}
        </View>
    );
}

export default CategoryWrapper;