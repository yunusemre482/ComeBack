import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const Details = ({route}) => {
  const [exercise, setExercise] = useState(route.params.exercise);
  const Item=()=>{
    return(
      <View>
        <View>

        </View>
        <View>
          <FontAwesome5Icon
            name='play'
            size={25}
          />
        </View>
      </View>
    )
  }
  return (
    <View style={{
      flex:1,
      position:'relative',
      justifyContent:'center',
      alignItems:'center'

    }}>
      <StatusBar
          backgroundColor={'#C7B8F5'}
          barStyle={'dark-content'}
          animated={true}
      />
      <Text>{exercise.title}</Text>
    </View>
  );
};

export default Details;