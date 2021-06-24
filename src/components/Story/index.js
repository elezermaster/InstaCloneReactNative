import React from 'react';
import {Text, View} from 'react-native'
import ProfilePicture from '../../components/ProfilePicture/index'
import styles from './styles'

const Story = ({imageUri, name})=> {
    return (
        <View>
            <ProfilePicture uri={imageUri}/>
            <Text style={styles.name}>{name}</Text>
        </View>
    );
}

export default Story;