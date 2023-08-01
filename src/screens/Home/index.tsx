import { StyleSheet, Text, View } from 'react-native';
import Logo from "../../assets/logo.svg"
import Stroke from "../../assets/stroke.svg"
import Message from "../../assets/message.svg"

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
  }
});
