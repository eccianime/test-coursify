import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils';

const styles = StyleSheet.create({
    buttonSeeMore: {
        justifyContent: 'center',
    },
    textSeeMore: {
        fontSize: 17,
        fontFamily: 'Roboto Regular',
        color: COLORS.gray04,
    },
    textTitle: {
        fontSize: 22,
        fontFamily: 'Roboto Bold',
        color: COLORS.green03
    },
    viewContainer: {
        marginTop: 40,
    },
    viewTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default styles;