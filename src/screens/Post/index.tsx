import React from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';
import RenderHTML from 'react-native-render-html';
import { Footer } from '../../components';

import { PostRouteProps } from '../../navigators/types';
import styles from './styles';

const Post = ({ route }: { route: PostRouteProps }) => {
    const { content, title } = route.params.data;
    const { width } = Dimensions.get('screen');
    return (
        <ScrollView>
            <View style={styles.viewBase}>
                <Text style={styles.textTitle}>{title.rendered}</Text>
                <RenderHTML
                    baseStyle={styles.textContent}
                    tagsStyles={{
                        a: styles.textContent,
                        h2: styles.textContent,
                        span: styles.textContentHeight,
                        p: styles.textContentMargin,
                        ul: styles.textContentMargin,
                        li: { marginBottom: 0, paddingBottom: 0 },
                    }}
                    // Workaround devido ao padding especifico desta tela { left: 20, right: 36 } 
                    // para que as imagens não ultrapassem o largo.
                    contentWidth={width - 56}
                    source={{ html: content.rendered }}
                />
            </View>
            <Footer />
        </ScrollView>
    );
}

export default Post;