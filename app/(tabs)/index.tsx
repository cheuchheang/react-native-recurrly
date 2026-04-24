import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href="/Onboarding" className="mt-4 bg-black text-white p-4 rounded">
        Onboarding
      </Link>
      <Link
        href="/(auth)/Sign-in"
        className="mt-4 bg-black text-white p-4 rounded"
      >
        Sign-in
      </Link>
      <Link
        href="/(auth)/Sign-up"
        className="mt-4 bg-black text-white p-4 rounded"
      >
        Sign-up
      </Link>
      <Link
        href="/subscriptions/1"
        className="mt-4 bg-black text-white p-4 rounded"
      >
        Subscription Details
      </Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "1" },
        }}
        className="mt-4 bg-black text-white p-4 rounded"
      >
        Subscription Details
      </Link>
    </View>
  );
}
