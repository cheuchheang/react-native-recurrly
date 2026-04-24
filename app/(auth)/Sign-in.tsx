import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SignIn = () => {
  return (
    <View>
      <Text>Sign-in</Text>
      <Link href="/(auth)/Sign-up">Sign-up</Link>
    </View>
  );
};

export default SignIn;
