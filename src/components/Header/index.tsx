import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import { IHeader } from './types';
import styles from './styles';
import { Logo } from '../../assets';
import { useNavigation } from '@react-navigation/native';
import { BaseNavigationProps } from '../../navigators/types';
import { COLORS } from '../../utils';

const Header = ({ hasBack }: IHeader) => {
    const navigation = useNavigation<BaseNavigationProps>();
    return (
        <View style={styles.viewHeader}>
            <View style={styles.viewLogoAndBack}>
                {
                    hasBack &&
                    <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
                        <Ionicons name='md-arrow-back' size={30} />
                    </TouchableOpacity>
                }
                <Image source={Logo} style={styles.imageLogo} />
            </View>
            <View style={styles.buttonMenu}>
                <Ionicons name='md-menu' color={COLORS.white} size={27} />
            </View>
        </View>
    );
}

export default Header;