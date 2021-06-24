import { StyleSheet, Dimensions} from 'react-native'
import { greaterThan } from 'react-native-reanimated';

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
        backgroundColor: '#eee',
    },
    container:{
        flexDirection: 'row',
        
    }
})

export default styles;