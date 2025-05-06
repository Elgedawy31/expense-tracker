import ScreenWraper from '@/components/ScreenWraper'
import { router } from 'expo-router'
import React, { useEffect } from 'react'
import { Image, StyleSheet } from 'react-native'

const Index = () => {

  useEffect(() => {
    setTimeout(() => {
      router.push('/(auth)/welcome')
    }, 2000);
  } , [])

  return (
    
    <ScreenWraper style={styles.container}>

      <Image
      source={require('@/images/splashImage.png')} 
      resizeMode='contain'
      />

    </ScreenWraper>
  )

}

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Index