import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const SignUp = () => {
  return (
    <View>
      <Text>Sign-up</Text>
      <Link href="/(auth)/Sign-in">Sign-in</Link>
    </View>
  )
}

export default SignUp