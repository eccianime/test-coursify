import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils';

const styles = StyleSheet.create({
    buttonBack: {
        height: 33,
        width: 33,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 17,
    },
    buttonMenu: {
        backgroundColor: COLORS.green01,
        height: 37,
        width: 37,
        borderRadius: 37,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageLogo: {
        width: 169,
        height: 50,
    },
    viewHeader: {
        height: 64,
        paddingVertical: 7,
        paddingHorizontal: 17,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    viewLogoAndBack: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})

export default styles;