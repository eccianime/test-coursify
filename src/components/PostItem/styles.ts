import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils';

const styles = StyleSheet.create({
    buttonWrapper: {
        marginTop: 28,
        marginRight: 38,
        marginBottom: 43,
        width: 235,
        borderWidth: 1,
        borderColor: COLORS.gray01,
        borderRadius: 12,
        paddingBottom: 35,
    },
    buttonWrapperLast: {
        marginRight: 0,
    },
    image: {
        height: 103,
        width: 235,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    textExcerpt: {
        color: COLORS.gray03,
        fontSize: 15,
        fontFamily: 'Roboto Regular',
        lineHeight: 20,
    },
    textSeeMore: {
        fontSize: 16,
        color: COLORS.yellow01,
        fontFamily: 'Roboto Bold',
        marginTop: 15,
        lineHeight: 20,
    },
    textTitle: {
        marginBottom: 16,
        lineHeight: 24,
        fontFamily: 'Roboto Bold',
        fontSize: 17,
        color: COLORS.green03
    },
    viewContent: {
        paddingTop: 15,
        paddingHorizontal: 10,
    }
})

export default styles;