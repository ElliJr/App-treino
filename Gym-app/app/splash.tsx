// app/splash.tsx
import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { useRouter } from "expo-router";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    // Espera 3 segundos e navega pro treino
    const timer = setTimeout(() => {
      router.replace("/(tabs)");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        entering={FadeIn.duration(1200)}
        exiting={FadeOut.duration(1200)}
      >
        <Text style={styles.text}>
          Welcome to the zone <Text style={{ color:"red", fontWeight: "bold", textShadowColor: "#000", textShadowOffset: {width: 2, height: 2}, textShadowRadius:3}}>pain</Text>
        </Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0ff",
    textAlign: "center",
  },
});
