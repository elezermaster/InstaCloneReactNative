import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    nameText: {
        alignSelf:'center',
        fontWeight: 'bold',
    
    },
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    left:{
        flexDirection: 'row',
    },
    right:{
        marginRight: 15,

    }

})

export default styles;