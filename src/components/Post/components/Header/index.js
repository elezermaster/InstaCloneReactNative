import React from 'react';
import {Text, View} from 'react-native'
import ProfilePicture from '../../../ProfilePicture'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';


const Header = ({imageUri, name})=> {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <ProfilePicture uri={imageUri} size={40}/>
                <Text style={styles.nameText}>{name}</Text>
            </View>
            <View style={styles.right}>
                <EntypoIcon name="dots-three-vertical" size={16} color="#000"/>
            </View>    
        </View>
    );
}

export default Header;

 //<Icon name="rocket" size={30} color="#900" />;