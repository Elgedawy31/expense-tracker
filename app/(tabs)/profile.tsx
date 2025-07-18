import React from 'react'
import ScreenWraper from '@/components/ScreenWraper'
import Header from '@/components/Header'
import { spacingY } from '@/constants/theme'

const profile = () => {
  return (
    <ScreenWraper>
      <Header title='Profile' style={{marginVertical:spacingY._10}} />
    </ScreenWraper>
  )
}

export default profile