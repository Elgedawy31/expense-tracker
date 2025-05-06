import { ActivityIndicator, ActivityIndicatorProps } from 'react-native'
import React from 'react'
import { colors } from '@/constants/theme'

const Loading = ({size='large' , color= colors.primary}:ActivityIndicatorProps) => {
  return (
   <ActivityIndicator size={size} color={color} ></ActivityIndicator>
  )
}

export default Loading