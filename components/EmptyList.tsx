import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const EmptyList = ({message}: {message: string}) => {
  return (
      <View style={styles.container }>
      <Image
        source={require('../assets/images/Empty-amico.png')}
        style={styles.emptyListImage}
      />
          <Text style={styles.emptyListText}>{ message}</Text>
    </View>
  );
};

export default EmptyList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
  emptyListText: {
    color: 'gray',
    fontWeight: 'bold',
  },
  emptyListImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.4,
  },
});
