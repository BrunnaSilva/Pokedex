import React from 'react'
import { View, Switch } from 'react-native'
import theme from '../../styles/theme'

interface SwitchProps {
  isVisible: boolean
  onPress: () => void
}

const SwitchButton = ({ isVisible, onPress }: SwitchProps) => {
  return (
    <View>
      <Switch
        trackColor={{ false: theme.colors.secondary, true: theme.colors.secondary }}
        thumbColor={isVisible ? theme.colors.secondary : theme.colors.button_gray}
        ios_backgroundColor='white'
        onValueChange={onPress}
        value={isVisible}
      />
    </View>
  )
}

export default SwitchButton
