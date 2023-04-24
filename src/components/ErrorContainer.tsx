import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  error:{
    justifyContent:'center', 
    height: "100%", 
    alignItems:'center'
  },
  errorText: {
    fontSize: 20
  }
})

const ErrorContainer = () => {
  const navigation = useNavigation();

  return (
    <>
      <Appbar.Header statusBarHeight={25} mode='center-aligned'>
        <Appbar.BackAction onPress={() => navigation.goBack()}/>
        <Appbar.Content title='Error' />
      </Appbar.Header>
      <View style={styles.error}>
        <Text style={styles.errorText}>Sorry, we have encountered an error.</Text>
        <Text style={styles.errorText}>Please try again later.</Text>
      </View>
    </>
  )
}

export default ErrorContainer