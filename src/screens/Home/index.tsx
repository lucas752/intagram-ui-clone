import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Logo from "../../assets/logo.svg"
import Stroke from "../../assets/stroke.svg"
import Message from "../../assets/message.svg"
import storieImage from "../../assets/stories.png"
import storieImage2 from "../../assets/stories1.png"
import storieImage3 from "../../assets/stories2.png"
import storieImage4 from "../../assets/stories3.png"

const data = [
    {
        id: Math.random().toString(36).substring(2,27),
        photoURL: storieImage,
        username: 'lewis'
    },
    {
        id: Math.random().toString(36).substring(2,27),
        photoURL: storieImage2,
        username: 'alexpalou'
    },
    {
        id: Math.random().toString(36).substring(2,27),
        photoURL: storieImage3,
        username: 'oceanbymr'
    },
    {
        id: Math.random().toString(36).substring(2,27),
        photoURL: storieImage4,
        username: 'f1'
    },
    {
        id: Math.random().toString(36).substring(2,27),
        photoURL: storieImage,
        username: 'lewisha...'
    },
    {
        id: Math.random().toString(36).substring(2,27),
        photoURL: storieImage2,
        username: 'alexpalou'
    },
    {
        id: Math.random().toString(36).substring(2,27),
        photoURL: storieImage3,
        username: 'oceanbymr'
    },
    {
        id: Math.random().toString(36).substring(2,27),
        photoURL: storieImage4,
        username: 'f1'
    },
    {
        id: Math.random().toString(36).substring(2,27),
        photoURL: storieImage,
        username: 'lewisha...'
    },
    {
        id: Math.random().toString(36).substring(2,27),
        photoURL: storieImage2,
        username: 'alexpalou'
    },
    {
        id: Math.random().toString(36).substring(2,27),
        photoURL: storieImage3,
        username: 'oceanbymr'
    },
    {
        id: Math.random().toString(36).substring(2,27),
        photoURL: storieImage4,
        username: 'f1'
    },
]

export function Home() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Logo/>
            <View style={styles.headerOptions}>
                <Stroke/>
                <Message/>
            </View>
        </View>
        <View style={styles.stories}>
            <FlatList horizontal={true} data={data} keyExtractor={item => item.id} renderItem={item => (
                <View style={styles.storiesContainer}>
                    <View style={styles.storiesCard} key={item.item.id}>
                        <Image style={styles.storiesCardImage} source={item.item.photoURL}/>
                    </View>
                    <Text style={styles.storiesUsername}>{item.item.username}</Text>
                </View>
            )}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  header : {
    marginTop: 40,
    paddingHorizontal: 10,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,
    flexDirection: 'row'
  },
  headerOptions: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10
  },
  stories: {
    width: '100%',
    paddingLeft: 10,
    //height: 115,
    alignContent: 'center',
    paddingVertical: 10
  },
  storiesCard: {
    borderWidth: 2,
    borderColor: "#ff0267",
    borderRadius: 50,
    marginRight: 14,
    padding: 2,
  },
  storiesCardImage: {
    width: 64,
    height: 64,
    borderRadius: 50
  },
  storiesUsername: {
    color: '#FFF',
    justifyContent: 'center',
  },
  storiesContainer: {
    alignItems: 'center'
  }
});
