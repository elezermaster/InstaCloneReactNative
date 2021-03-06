import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        margin:5,
        
    },
    likes: {
        fontWeight: 'bold',
        margin:3,
    },
    caption:{
        margin:3,
    },
    postedAt:{
        color: '#8c8c8c',
        margin:3,
    },
    iconsContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
    },
    leftIcons:{
        width: 120,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
})

export default styles;