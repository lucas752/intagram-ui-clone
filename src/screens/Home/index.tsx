import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Logo from "../../assets/logo.svg"
import Stroke from "../../assets/stroke.svg"
import Message from "../../assets/message.svg"
import Points from "../../assets/points.svg"
import image from "../../assets/stories.png"
import image2 from "../../assets/stories1.png"
import image3 from "../../assets/stories2.png"
import image4 from "../../assets/stories3.png"

const data = [
    {
        id: Math.random().toString(36).substring(2,27),
        photoURL: image,
        username: 'lewis'
    },
    {
        id: Math.random().toString(36).substring(2,27),
        photoURL: image2,
        username: 'alexpalou'
    },
    {
        id: Math.random().toString(36).substring(2,27),
        photoURL: image3,
        username: 'oceanbymr'
    },
    {
        id: Math.random().toString(36).substring(2,27),
        photoURL: image4,
        username: 'f1'
    },
    {
        id: Math.random().toString(36).substring(2,27),
        photoURL: image,
        username: 'lewisha...'
    },
    {
        id: Math.random().toString(36).substring(2,27),
        photoURL: image2,
        username: 'alexpalou'
    },
    {
        id: Math.random().toString(36).substring(2,27),
        photoURL: image3,
        username: 'oceanbymr'
    },
    {
        id: Math.random().toString(36).substring(2,27),
        photoURL: image4,
        username: 'f1'
    },
    {
        id: Math.random().toString(36).substring(2,27),
        photoURL: image,
        username: 'lewisha...'
    },
    {
        id: Math.random().toString(36).substring(2,27),
        photoURL: image2,
        username: 'alexpalou'
    },
    {
        id: Math.random().toString(36).substring(2,27),
        photoURL: image3,
        username: 'oceanbymr'
    },
    {
        id: Math.random().toString(36).substring(2,27),
        photoURL: image4,
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
        <View style={styles.content}>
                <View style={styles.contentHeader}>
                    <View style={styles.contentHeaderLeft}>
                        <Image style={styles.contentHeaderLeftImage} source={image}/>
                        <Text style={styles.contentHeaderLeftImageText}>Lucas</Text>
                    </View>
                    <Points />
                </View>
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
    alignItems: 'center',
    paddingVertical: 10
  },
  storiesCard: {
    borderRadius: 50,
    marginRight: 14,
    padding: 2,
  },
  storiesCardImage: {
    width: 64,
    height: 64,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#ff0267",
  },
  storiesUsername: {
    color: '#FFF',
    justifyContent: 'center',
  },
  storiesContainer: {
    alignItems: 'center'
  },
  content: {
    width: '100%',
    marginBottom: 10
  },
  contentHeader: {
    height: 52,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  contentHeaderLeft: {
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  contentHeaderLeftImage: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#ff0267",
  },
  contentHeaderLeftImageText: {
    color: "#fff",
  }
});
