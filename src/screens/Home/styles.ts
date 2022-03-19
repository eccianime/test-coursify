import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils';

const styles = StyleSheet.create({
    textOrderBy: {
        fontSize: 17,
        fontFamily: 'Roboto Bold',
        color: COLORS.gray04,
        lineHeight: 20,
    },
    viewBase: {
        paddingHorizontal: 15,
        paddingTop: 20,
    },
    viewOrderBy: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})

export default styles;