import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Logo from "../../assets/logo.svg"
import Stroke from "../../assets/stroke.svg"
import Message from "../../assets/message.svg"
import Bookmark from "../../assets/Bookmark.svg"
import Heart from "../../assets/Heart.svg"
import Comment from "../../assets/Comment.svg"
import Share from "../../assets/Share.svg"
import Points from "../../assets/points.svg"
import House from "../../assets/house.svg"
import Search from "../../assets/search.svg"
import Union from "../../assets/union.svg"
import Store from "../../assets/store.svg"
import image from "../../assets/stories.png"
import image2 from "../../assets/stories1.png"
import image3 from "../../assets/stories2.png"
import image4 from "../../assets/stories3.png"
import post1 from "../../assets/post1.png"
import post2 from "../../assets/post2.png"
import post3 from "../../assets/post3.png"
import post4 from "../../assets/post4.png"
import profile from "../../assets/profile.png"

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

const postData = [
    {
        id: Math.random().toString(36).substring(2,27),
        postURL: post2,
        username: 'alexpalou',
        subtitle: 'Ready for Qualifying',
        profileURL: image2,
        comment: '2000',
        hours: '5'
    },
    {
        id: Math.random().toString(36).substring(2,27),
        postURL: post4,
        username: 'lewis',
        subtitle: 'Tommy X Awake',
        profileURL: image,
        comment: '15322',
        hours: '8'
    },
    {
        id: Math.random().toString(36).substring(2,27),
        postURL: post3,
        username: 'oceanbymr',
        subtitle: 'driving in Indianapolis this weekend',
        profileURL: image3,
        comment: '610',
        hours: '13'
    },
    {
        id: Math.random().toString(36).substring(2,27),
        postURL: post1,
        username: 'f1',
        subtitle: 'Welcome to the grid, APXGP',
        profileURL: image4,
        comment: '4589',
        hours: '23'
    },
    {
        id: Math.random().toString(36).substring(2,27),
        postURL: post2,
        username: 'alexpalou',
        subtitle: 'Ready for Qualifying',
        profileURL: image2,
        comment: '2000',
        hours: '5'
    },
    {
        id: Math.random().toString(36).substring(2,27),
        postURL: post4,
        username: 'lewis',
        subtitle: 'Tommy X Awake',
        profileURL: image,
        comment: '15322',
        hours: '8'
    },
    {
        id: Math.random().toString(36).substring(2,27),
        postURL: post3,
        username: 'oceanbymr',
        subtitle: 'driving in Indianapolis this weekend',
        profileURL: image3,
        comment: '610',
        hours: '13'
    },
    {
        id: Math.random().toString(36).substring(2,27),
        postURL: post1,
        username: 'f1',
        subtitle: 'Welcome to the grid, APXGP',
        profileURL: image4,
        comment: '4589',
        hours: '23'
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
        <FlatList data={postData} keyExtractor={item => item.id} renderItem={item => (
            <View style={styles.content}>
                <View style={styles.contentHeader}>
                    <View style={styles.contentHeaderLeft}>
                        <Image style={styles.contentHeaderLeftImage} source={item.item.profileURL}/>
                        <Text style={styles.contentHeaderLeftImageText}>{item.item.username}</Text>
                    </View>
                    <Points />
                </View>
                <View style={styles.contentImage}>
                    <Image style={styles.postImage} source={item.item.postURL} />
                </View>

                <View style={styles.contentFooter}>
                    <View style={styles.contentFooterLeft}>
                        <Heart/>
                        <Comment/>
                        <Share/>
                    </View>
                    <Bookmark />
                </View>

                <View style={styles.contentFooterTexts}>
                    <View style={styles.subtitleUser}>
                        <Text
                            style={styles.contentFooterText1}
                        >
                            {item.item.username}&nbsp;
                        </Text>
                        <Text style={styles.contentFooterText}>
                            {item.item.subtitle}
                        </Text>
                    </View>
                    <Text
                        style={[styles.contentFooterText2, styles.contentFooterText]}
                    >
                        Ver todos os {item.item.comment} comentários
                    </Text>
                    <Text
                        style={[styles.contentFooterText3, styles.contentFooterText]}
                    >
                        Há {item.item.hours} horas
                    </Text>
                </View>
            </View>
        )}/>

        <View style={styles.footer}>
            <House/>
            <Search/>
            <Store/>
            <Union/>
            <Image source={profile} style={styles.footerProfile}/>
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
    width: 35,
    height: 35,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#ff0267",
  },
  contentHeaderLeftImageText: {
    color: "#fff",
  },
  contentImage: {
    width: "100%",
    height: 355,
  },
  postImage: {
    width: '100%',
    height: '100%'
  },
  contentFooter: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 10
  },
  contentFooterLeft: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10
  },
  contentFooterText: {
    color: "#fff",
  },
  contentFooterTexts: {
    paddingLeft: 10,
    marginTop: 6,
    gap: 10,
  },
  contentFooterText1: {
    fontSize: 14,
    fontWeight: '900',
    color: '#FFF'
  },

  contentFooterText2: {
    fontSize: 14,
  },
  contentFooterText3: {
    fontSize: 10,
    marginLeft: 2
  },
  subtitleUser: {
    flexDirection: 'row'
  },
  footer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    width: '100%',
    height: 60,
    alignItems: 'center',
  },
  footerProfile: {
    height: 28,
    width: 28,
    borderRadius: 50
  }
});
