import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils';

const styles = StyleSheet.create({
    buttonKnowMore: {
        backgroundColor: COLORS.yellow02,
        height: 44,
        width: 216,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 60,
        marginTop: 28,
    },
    imageLogo: {
        width: 172,
        height: 45,
        marginBottom: 11,
    },
    textFooter: {
        textAlign: 'center',
        color: COLORS.white,
        fontSize: 12,
        lineHeight: 17,
        fontFamily: 'Roboto Regular'
    },
    viewContainer: {
        paddingTop: 19,
        paddingBottom: 27,
        width: '100%',
        backgroundColor: COLORS.green02,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles;