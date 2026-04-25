import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";
const SafeAreaView = styled(RNSafeAreaView);

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-xl font-bold text-yellow-400">
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
    </SafeAreaView>
  );
}
