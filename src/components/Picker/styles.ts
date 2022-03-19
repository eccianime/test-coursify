import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils';

const styles = StyleSheet.create({
    buttonPicker: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 46,
        width: 180,
        paddingHorizontal: 10,
    },
    buttonPickerClosed: {
        borderColor: COLORS.gray04,
        borderWidth: 1,
        borderRadius: 10,
    },
    buttonPickerOpen: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    buttonPickerOption: {
        borderLeftColor: COLORS.gray04,
        borderRightColor: COLORS.gray04,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderRadius: 0,
    },
    buttonPickerOptionLast: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomWidth: 1,
    },
    textSelected: {
        color: COLORS.gray04,
        fontFamily: 'Roboto Regular',
        fontSize: 17,
        lineHeight: 20,
    },
    viewPickerOptions: {
        position: 'absolute',
        top: 46,
        zIndex: 10,
        backgroundColor: COLORS.default,
        borderRadius: 10,
    }
})

export default styles;