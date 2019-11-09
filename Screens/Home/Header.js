import React from 'react'
import { Image } from 'react-native-elements'
import { StyleSheet, Text, View } from 'react-native';

export const Header = () => {
  return (
    <>
    <View style={{
      margin: 30,
      flexDirection: 'row',
      justifyContent: 'space-between',
    }}>
      <Text style={styles.header}>Classy</Text>
      <Image 
        style={{width: 50, height: 150}}
        source={require('./rb.png')}/>
      <Text style={styles.header}>News</Text>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  header: {
    margin: 30,
    fontSize: 40,
    fontFamily: 'Cochin',
    fontWeight: 'bold'
  }
})