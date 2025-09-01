import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {colors} from '../themes';
import {useNavigation} from '@react-navigation/native';
const BackButton = () => {
  const navigation = useNavigation();
  //console.log('Navigation in BackButton: ', navigation);
  return (
    <View>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <ChevronLeftIcon size={30} color={colors.button} />
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backButton: {
    marginLeft: 10,
    marginTop: 4,
  },
});
