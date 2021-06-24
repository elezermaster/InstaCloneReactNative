import React from 'react';
import {View, FlatList} from 'react-native'
import Story from '../../components/Story/index'
import styles from './styles'

const data = [
    {
        imageUri:'https://avatars.githubusercontent.com/u/29683589?s=60&v=4',
        name:'Elazar'
    },
    {
        imageUri:'https://date.isra.com/photos/124/4924/6499924/tb_v9vln7xwco.jpg',
        name:'Manga'
    },
    {
        imageUri:'https://date.isra.com/photos/100/1500/8386500/tb_ddp5q62svf.jpg',
        name:'Ksana'
    },
    {
        imageUri:'https://date.isra.com/photos/122/522/5420522/tb_56gmpnx6o6.jpg',
        name:'Wendy'
    },
    {
        imageUri:'https://date.isra.com/photos/99/4499/8724499/tb_8r8667z8v2.jpg',
        name:'Alena'
    },
    {
        imageUri:'https://avatars.githubusercontent.com/u/29683589?s=60&v=4',
        name:'Elazars'
    },
    {
        imageUri:'https://date.isra.com/photos/124/4924/6499924/tb_v9vln7xwco.jpg',
        name:'Mangas'
    },
    {
        imageUri:'https://date.isra.com/photos/100/1500/8386500/tb_ddp5q62svf.jpg',
        name:'Ksanas'
    },
    {
        imageUri:'https://date.isra.com/photos/122/522/5420522/tb_56gmpnx6o6.jpg',
        name:'Wendys'
    },
    {
        imageUri:'https://date.isra.com/photos/99/4499/8724499/tb_8r8667z8v2.jpg',
        name:'Alenas'
    },
]
const Stories = (props)=> {
    return (
        <FlatList
        style={styles.container}

        
        data={data}
        horizontal
        renderItem={({item})=><Story imageUri={item.imageUri} name={item.name}/>}
        keyExtractor={item => item.name}
        
      />
        // <View>
        //     <Story imageUri={data[0].imageUri} name={data[0].name}/>
        //     <Story imageUri={data[1].imageUri} name={data[1].name}/>
        //     <Story imageUri={data[2].imageUri} name={data[2].name}/>
        //     <Story imageUri={data[3].imageUri} name={data[3].name}/>
        //     <Story imageUri={data[4].imageUri} name={data[4].name}/>
        // </View>
    );
}

export default Stories;

// style={{
//     marginTop:0,
//     maxHeight:"50%",
//     //height: 50,
//     backgroundColor: '#b3c3cc',
//     flexGrow: 0,
//   }}