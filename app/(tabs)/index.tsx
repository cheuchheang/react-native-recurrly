import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";
const SafeAreaView = styled(RNSafeAreaView);

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-7xl font-sans-extrabold">
        Home
      </Text>
      <Link href="/Onboarding" className="mt-4 bg-black text-white p-4 rounded font-sans-bold">
        Onboarding
      </Link>
      <Link
        href="/(auth)/Sign-in"
        className="mt-4 bg-black text-white p-4 rounded font-sans-bold"
      >
        Sign-in
      </Link>
      <Link
        href="/(auth)/Sign-up"
        className="mt-4 bg-black text-white p-4 rounded font-sans-bold"
      >
        Sign-up
      </Link>
      <Link
        href="/subscriptions/1"
        className="mt-4 bg-black text-white p-4 rounded font-sans-bold"
      >
        Subscription Details
      </Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "1" },
        }}
        className="mt-4 bg-black text-white p-4 rounded font-sans-bold"
      >
        Subscription Details
      </Link>
    </SafeAreaView>
  );
}
