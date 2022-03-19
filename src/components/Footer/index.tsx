import React from 'react';
import { Image, Linking, Text, TouchableOpacity, View } from 'react-native';
import { LogoWhite } from '../../assets';
import styles from './styles';

const Footer = () => {
    return (
        <View style={styles.viewContainer}>
            <Image source={LogoWhite} style={styles.imageLogo} />
            <Text style={styles.textFooter}>{`O Coursify.me é uma plataforma de ensino a distância,\nonde qualquer pessoa ou empresa pode construir seu\nEAD e vender cursos pela internet.`}</Text>
            <TouchableOpacity style={styles.buttonKnowMore} onPress={() => Linking.openURL('https://coursify.me')}>
                <Text style={styles.textFooter}>Quero conhecer a plataforma!</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Footer;