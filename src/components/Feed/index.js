import React from 'react'
import {View, FlatList} from 'react-native'
import styles from './styles'
import Post from '../Post/index'
import Stories from '../Stories/index'

const data = [
    {
        id:'1',
        user:{
            imageUri: 'https://avatars.githubusercontent.com/u/29683589?s=60&v=4',
            name: 'Elazar'
        },
        imageUri:'https://i.pinimg.com/originals/05/a2/73/05a273c52968328075d8fe50850564bf.jpg',
        caption: "sweet cookies #sweety",
        likesCount: 1234,
        postedAt: '6 minutes added'
    
    },
    {
        id:'2',
        user:{
            imageUri: 'https://avatars.githubusercontent.com/u/29683589?s=60&v=4',
            name: 'Elazar'
        },
        imageUri:'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2016/09/chewy-chocolate-chip-cookies-4.jpg',
        caption: "sweet cookies #sweety",
        likesCount: 1234,
        postedAt: '6 minutes added'
    
    },
    {
        id:'3',
        user:{
            imageUri: 'https://avatars.githubusercontent.com/u/29683589?s=60&v=4',
            name: 'Elazar'
        },
        imageUri:'https://www.tasteandtellblog.com/wp-content/uploads/2019/12/Best-Sugar-Cookie-Recipe-tasteandtellblog.com-1-768x512.jpg',
        caption: "sweet cookies #sweety",
        likesCount: 1234,
        postedAt: '6 minutes added'
    
    },
    {
        id:'4',
        user:{
            imageUri: 'https://avatars.githubusercontent.com/u/29683589?s=60&v=4',
            name: 'Elazar'
        },
        imageUri:'https://s3.envato.com/files/248697726/EOS%206D%20Mark%20II01-06-2018009023.jpg',
        caption: "sweet cookies #sweety",
        likesCount: 1234,
        postedAt: '6 minutes added'
    
    },

]

const Feed = () =>(
    <FlatList
        data = {data}
        keyExtractor= {({id})=>id}
        renderItem = {({item}) => <Post post={item}/>}
        ListHeaderComponent={Stories}
    />
)

export default Feed;