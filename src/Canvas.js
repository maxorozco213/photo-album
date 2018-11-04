// Page on which the user will create projects
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class Canvas extends React.Component {
  //eslint-disable-next-line
  static navigationOptions = ({ navigation, screenProps, props }) => {
    return {
     headerTintColor: 'black',
     title: 'Canvas',
     headerStyle: { backgroundColor: 'white' },
     headerTitleStyle: { color: 'black' },
     headerRight:
      <TouchableOpacity
        onPress={console.log('press')}
      > {/*save to gallery */}
        <Text fontSize={25}>Save</Text>
      </TouchableOpacity>
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.canvas}>
          <Text>Place Holder Text</Text>
          {/* Pictures will go here */}
        </View>

        <View style={styles.optionBarStyle}>
          <View>
            {/* Add image button; Access to local gallery */}
            <TouchableOpacity>
              <Image
                //eslint-disable-next-line
                source={require('../images/picture.png')}
                style={styles.imageStyle}
              />
            </TouchableOpacity>
          </View>

          <View>
              {/* Add text */}
            <TouchableOpacity>
              <Image
                //eslint-disable-next-line
                source={require('../images/text.png')}
                style={styles.imageStyle}
              />
            </TouchableOpacity>
          </View>

          <View>
            {/* Add effects */}
            <TouchableOpacity>
              <Image
                //eslint-disable-next-line
                source={require('../images/effect.png')}
                style={styles.imageStyle}
              />
            </TouchableOpacity>
          </View>

          <View>
            {/* Undo button */}
            <TouchableOpacity>
              <Image
                //eslint-disable-next-line
                source={require('../images/return-button.png')}
                style={styles.imageStyle}
              />
            </TouchableOpacity>

          {/* ***** add save button here **** */}

          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: '#FCFC79'
  },

  canvas: {
    flex: 1
  },

  optionBarStyle: {
    flex: 0,
    backgroundColor: 'white',
    height: 45,
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: 'black',
    alignItems: 'center',
  },

  imageStyle: {
    flex: 0,
    resizeMode: 'contain',
    width: 60,
    height: 45
  },

  imageContainerStyle: {
    flex: 1,
  }
});
