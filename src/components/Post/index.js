import React from 'react';
import {View} from 'react-native'

import HeaderPost from './components/Header/index'
import Body from './components/Body/index'
import FooterPost from './components/Footer/index'

const Post = ({post})=> {
    return (
        <View>
            <HeaderPost 
                imageUri ={post.user.imageUri} 
                name={post.user.name}/>
            <Body 
                imageUri={post.imageUri}/>
            <FooterPost 
                likesCount={post.likesCount} 
                caption={post.caption} 
                postedAt={post.postedAt}/>
        </View>
    );
}

export default Post;