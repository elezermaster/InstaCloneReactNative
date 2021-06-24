import React, { Component } from 'react';
import { View} from 'react-native'
import Feed from '../../components/Feed/index'

const HomeScreen = ({}) => {
    return (
        <View>
            
            <Feed />

        </View>
    )
}

export default HomeScreen;

// const post = {
//     user:{
//         imageUri: 'https://avatars.githubusercontent.com/u/29683589?s=60&v=4',
//         name: 'Elazar'
//     },
//     imageUri:'https://i.pinimg.com/originals/05/a2/73/05a273c52968328075d8fe50850564bf.jpg',
//     caption: "sweet cookies #sweety",
//     likesCount: 1234,
//     postedAt: '6 minutes added'

// }