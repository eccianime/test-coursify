
import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { CategoryHeadline, Footer, Picker } from '../../components';
import { ISelectedOption } from '../../components/Picker/types';
import { PICKER_OPTIONS } from '../../utils';
import styles from './styles';

const Home = () => {
    const [selectedOrder, setSelectedOrder] = useState<ISelectedOption>(PICKER_OPTIONS[0].value);
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.viewBase}>
                <View style={styles.viewOrderBy}>
                    <Text style={styles.textOrderBy}>ORDENAR POR:</Text>
                    <Picker options={PICKER_OPTIONS} value={selectedOrder} setValue={(value) => setSelectedOrder(value)} />
                </View>
                <CategoryHeadline selectedOrder={selectedOrder} />
            </View>
            <Footer />
        </ScrollView>
    );
}

export default Home;