import { colors } from '@/constants/theme'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const index = () => {

  return (
    
    <View style={styles.container}>

      <Image
      source={require('@/images/splashImage.png')} 
      resizeMode='contain'
      />

    </View>
  )

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.neutral900
  }
})

export default index