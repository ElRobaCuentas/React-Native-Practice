import { StyleSheet } from "react-native"



export const globalColors = {

    background: '#fff'

}

export const globalStyles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        backgroundColor: globalColors.background,
        justifyContent: 'space-between',
    },

    logoContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    logoIcon: {
        borderRadius: 50,
        height: 30,
        width: 30,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        borderRadius: 5,
        padding: 20,
        height: 450,
        backgroundColor: '#E0E0E0'
    },

    buttomContainer: {
        gap: 15
    },

    primatyButtom: {
        borderRadius: 30,
        height: 60,
        alignItems: 'center',
        padding: 20,
    },

})