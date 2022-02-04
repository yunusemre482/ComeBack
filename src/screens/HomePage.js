import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Image,
  Text,
  View,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import {COLORS, SIZES} from '../constants';
let Excersizes = [
  {
    title: 'Diet Recommendation',
    image: require('../assets/images/Excersize1.jpg'),
    subTitle:
      'Live happier and healthier by learning the fundamentals of diet recommendation',
    duration: '5-20 MIN Course',
  },
  {
    title: 'Kegel Excersizes',
    image: require('../assets/images/Excersize2.jpg'),
    subTitle:
      'Live happier and healthier by learning the fundamentals of kegel Excersizes',
    duration: '10-20 MIN Course',
  },
  {
    title: 'Meditation',
    image: require('../assets/images/Excersize3.jpg'),
    subTitle:
      'Live happier and healthier by learning the fundamentals of meditation and mindfulness',
    duration: '3-10 MIN Course',
  },
  {
    title: 'Skipping Rope',
    image: require('../assets/images/Excersize4.jpg'),
    subTitle: 'Live happier and healthier by learning the fundamentals of Yoga',
    duration: '5-10 MIN Course',
  },
  {
    title: 'Meditation1',
    image: require('../assets/images/Excersize5.jpg'),
    subTitle:
      'Live happier and healthier by learning the fundamentals of meditation and mindfulness',
    duration: '3-10 MIN Course',
  },
  {
    title: 'Skipping Rope1',
    image: require('../assets/images/Excersize6.jpg'),
    subTitle: 'Live happier and healthier by learning the fundamentals of Yoga',
    duration: '5-10 MIN Course',
  },
  {
    title: 'Meditation2',
    image: require('../assets/images/Excersize7.jpg'),
    subTitle:
      'Live happier and healthier by learning the fundamentals of meditation and mindfulness',
    duration: '3-10 MIN Course',
  },
  {
    title: 'Skipping Rope2',
    image: require('../assets/images/Excersize8.jpg'),
    subTitle: 'Live happier and healthier by learning the fundamentals of Yoga',
    duration: '5-10 MIN Course',
  },
];

const HomePage = ({navigation}) => {
  const Item = ({excersize}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.itemStyle}
        onPress={() =>
          navigation.navigate('DetailsScreen', {exercise: excersize})
        }>
        <Image style={styles.itemImageStyle} source={excersize.image} />
        <Text style={{marginTop: 20, textAlign: 'center', fontSize: 16}}>
          {excersize.title}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, position: 'relative'}}>
      <StatusBar
        backgroundColor={COLORS.accent + '30'}
        barStyle="dark-content"
        animated={true}
      />
      <View style={styles.outerView}>
        <Image
          source={require('../assets/images/BgOrange.png')}
          style={{
            position: 'absolute',
            top: 60,
            left: -50,
          }}
        />
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <View style={styles.outerContainer}>
            <View
              style={{
                right:6,
                top:2,
                width:'50%',
                height:5,
                backgroundColor:COLORS.white,
                borderRadius:40,
              }}
            ></View>
            <View
            style={{
                right:-4,
                top:3,
                width:'50%', 
                marginVertical:5,
                height:5,
                backgroundColor:COLORS.white,
                borderRadius:40,
              }}></View>
          </View>
        </TouchableOpacity>
        <Text style={styles.middleText}>Welcome The App Eric</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={Excersizes}
          keyExtractor={item => item.title}
          style={{
            flex: 1,
            paddingHorizontal: 20,
            paddingVertical: 4,
            marginTop: -60,
          }}
          scrollEnabled={true}
          contentContainerStyle={{
            alignItems: 'center',
          }}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({item}) => <Item excersize={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },

  itemStyle: {
    backgroundColor: COLORS.white,
    width: 0.52 * SIZES.width - 35,
    margin: 10,
    height: 180,
    borderRadius: 10,
    padding: 15,
    shadowColor: '#9e9898',
    elevation: 5,
  },
  itemImageStyle: {
    borderRadius: 8,
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    marginBottom: 5,
    flex: 1,
  },
  middleText: {
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 45,
    alignSelf: 'center',
  },
  outerView: {
    width: '100%',
    height: 0.4 * SIZES.height,
    padding: 30,
    backgroundColor: COLORS.accent + '20',
    position: 'relative',
  },
  innerContainer: {
    height: 3,
    backgroundColor: COLORS.white,
    width: '40%',
    marginLeft: 5,
  },
  middleContainer: {
    height: 3,
    backgroundColor: COLORS.white,
    width: '40%',
    marginBottom: 8,
    marginLeft: -5,
  },
  outerContainer: {
    width: 60,
    height: 60,
    backgroundColor: COLORS.accent + '45',
    marginRight: 0,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HomePage;
