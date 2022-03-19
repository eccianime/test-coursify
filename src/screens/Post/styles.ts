import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils';

const styles = StyleSheet.create({
    textContent: {
        color: COLORS.gray06,
        fontSize: 17,
        fontFamily: 'Roboto Regular',
        paddingBottom: 0,
        marginBottom: 0,
    },
    textContentHeight: {
        lineHeight: 27,
    },
    textContentMargin: {
        marginBottom: 0,
    },
    textTitle: {
        color: COLORS.green03,
        fontSize: 24,
        fontFamily: 'Roboto Bold',
        lineHeight: 34,
    },
    viewBase: {
        paddingLeft: 26,
        paddingRight: 30,
        paddingTop: 46,
    },
})

export default styles;