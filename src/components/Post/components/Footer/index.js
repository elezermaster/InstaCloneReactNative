import React, {useState, useEffect} from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native'
import styles from './styles';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
const Footer = ({likesCount: LikesCountProp, caption, postedAt})=> {

    const [isLiked, setIsLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(0)

    useEffect( ()=>{
        setLikesCount(LikesCountProp)
    },[])

    const onLikePressed = ()=>{
        const amount = isLiked? -1: 1;
        console.log("on liked ")
        setIsLiked(!isLiked)
        setLikesCount( likesCount+ amount)
    }

    return (
        <View style={styles.container}>
            <View style={styles.iconsContainer}>
                <View style={styles.leftIcons}>
                    <TouchableWithoutFeedback onPress={onLikePressed}>
                        {isLiked?
                        <AntDesignIcon name="heart" size={25} color={"#e73838"}/>
                        :<AntDesignIcon name="hearto" size={25} color={"#545454"}/>
                        }
                        
                    </TouchableWithoutFeedback>
                    <FontistoIcon name="comment" size={23} color={"#545454"}/>
                    <IoniconsIcon name="paper-plane-outline" size={27} color={"#545454"}/> 
                </View>
                <FontAwesomeIcon name="bookmark-o" size={25} color={"#545454"}/>
            </View>

            <Text style={styles.likes}>{likesCount}</Text>
            <Text style={styles.caption}>{caption}</Text>
            <Text style={styles.postedAt}>{postedAt}</Text>
        </View>
    );
}

export default Footer;